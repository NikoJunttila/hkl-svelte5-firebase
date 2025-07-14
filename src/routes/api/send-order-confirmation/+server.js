// src/routes/api/send-order-confirmation/+server.js
import { sendOrderConfirmationEmail } from '$lib/mailgun.js';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
  try {
    const { customerEmail, orderId } = await request.json();
    
    const result = await sendOrderConfirmationEmail({
      to: customerEmail,
      orderDetailsUrl: `https://hyvinvointikeskusluxus.com/order/${orderId}`,
    });

    return json({ success: true, messageId: result.messageId });
  } catch (error) {
    console.error('Order confirmation email error:', error);
    return json({ success: false, error: error.message }, { status: 500 });
  }
}
