import { stripe } from '$lib/stripe';
import { env } from '$env/dynamic/private';
import { db } from '$lib/firebase';
import { doc, writeBatch } from 'firebase/firestore';
/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    console.log("webhook event received")
	const payload = await request.text();
	// @ts-ignore
	const sig = request.headers.get('stripe-signature');
	let event;
	try {
		if (sig) {
			event = stripe.webhooks.constructEvent(payload, sig, env.STRIPE_WEBHOOK_SECRET);
		} else {
			throw new Error('Missing Stripe signature');
		}
	} catch (err) {
		console.error(err);
		return new Response(JSON.stringify({ error: 'Invalid webhook signature' }), {
			status: 400,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
	if (event.type === 'checkout.session.completed') {
		const session = event.data.object;
		// @ts-ignore
		const orderNumber = session.metadata.order_number;
    try{
        const response = await fetch(`${env.BASE}/api/send-order-confirmation`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                customerEmail: session.customer_details?.email,
                orderId:orderNumber,
            }),
        });
        const response2 = await fetch(`${env.BASE}/api/send-order-confirmation`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                customerEmail: "info.hyvinvointikeskusluxus@gmail.com",
				orderId:orderNumber,
            }),
        });
        if (!response.ok) {
            console.error('res1 Error sending email');
        }
        if (!response2.ok) {
            console.error('res2 Error sending email');
        }
    }
    catch(e){
        console.log("error with mailgun",e)
    }
		try {
            console.log(`email: ${session.customer_details?.email}`)
            console.log(`customer_details: ${session.customer_details}`)
			const batch = writeBatch(db);
			const orderRef = doc(db, 'orders', orderNumber);
			const orderAdminRef = doc(db, 'ordersAdmin', orderNumber);
			batch.update(orderRef, {
				payment: 'maksettu',
                name:session.customer_details?.name
			});
			batch.update(orderAdminRef, {
				payment: 'maksettu',
				stripeSessionId: session.id,
                name:session.customer_details?.name,
                email:session.customer_details?.email,
                address:{...session.customer_details?.address}
				// Update other relevant fields as needed
			});
			await batch.commit();
		} catch (error) {
			console.error('Error updating order in Firebase:', error);
			return new Response(JSON.stringify({ error: 'Failed to update order' }), {
				status: 500,
				headers: {
					'Content-Type': 'application/json'
				}
			});
		}
	}
	return new Response(JSON.stringify({ received: true }), {
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		}
	});
}
