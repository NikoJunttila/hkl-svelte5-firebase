import sgMail from '@sendgrid/mail';
import { env } from '$env/dynamic/private';
sgMail.setApiKey(env.SENDGRID);

export async function POST({request}) {
    const body = await request.json();
    const { to, templateId, dynamicTemplateData } = body
    
    const msg = {
        to,
        from: 'randomderp98@gmail.com', // Replace with your verified sender email
        templateId: templateId, // Use the dynamic template ID from SendGrid
        dynamicTemplateData: dynamicTemplateData,
    };

    try {
      await sgMail.send(msg);
      return new Response(JSON.stringify({ success: 'Succesfully sent email' }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ error: 'Error sending email' }), {
        status: 500,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    }
  }