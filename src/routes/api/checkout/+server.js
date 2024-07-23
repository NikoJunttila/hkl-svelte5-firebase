import { stripe } from '$lib/stripe';
import { env } from '$env/dynamic/private';
/** @type {import('./$types').RequestHandler} */
export async function POST({request}) {
    const data = await request.json()
    const orderNum = data.orderNum
    const couponCode = data.couponCode
/** @type {import("$lib/customTypes").Product[]}*/
    const cartItems = data.items
    const lineItems = cartItems.map((item) => {
        return {
            price_data: {
                currency:"EUR",
                product_data:{
                   name: item.title,
                   images:[item.thumbnail],
                },
                unit_amount: item.discountedPrice * 100
            },
            quantity: 1
        }
    })
    const sessionParams = {
        line_items: lineItems,
        shipping_address_collection: {
            allowed_countries: ["FI","CA"],
        },
        mode: "payment",
        success_url: `${env.BASE}/order/${orderNum}`,
        cancel_url: `${env.BASE}/failure`,
        metadata: {
            order_number: orderNum, // Include the order number as metadata
        },
    };
    if (couponCode) {
        // If a coupon code is provided, apply it to the session
        // @ts-ignore
        sessionParams.discounts = [
            {
                coupon: couponCode,
            },
        ];
    }
        // @ts-ignore
        const session = await stripe.checkout.sessions.create(sessionParams)
/*     const session = await stripe.checkout.sessions.create({
        line_items:lineItems,
        shipping_address_collection:{
            allowed_countries: ["FI"],
        },
        mode:"payment",
        success_url:`${env.BASE}/order/${orderNum}`,
        cancel_url:`${env.BASE}/failure`,
        metadata: {
            order_number: orderNum // Include the order number as metadata
        },
        discounts: [{
            coupon: '{{COUPON_ID}}',
          }],
    }) */
    return new Response(JSON.stringify({url:session.url}),{status:200,headers:{
        "Content-Type":"application/json"
    }} );
};