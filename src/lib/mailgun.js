// @ts-nocheck
// lib/mailgun.js
import { MG_API_KEY} from '$env/static/private';
const MAILGUN_DOMAIN = "mg.hyvinvointikeskusluxus.com"
const apiUrl = `https://api.eu.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`;

/**
 * Send email using Mailgun API
 * @param {Object} emailData - Email configuration object
 * @param {string} emailData.to - Recipient email address
 * @param {string} emailData.subject - Email subject
 * @param {string} emailData.text - Plain text content
 * @param {string} [emailData.html] - HTML content (optional)
 * @param {string} [emailData.from] - Sender email (optional, uses default if not provided)
 * @param {string} [emailData.replyTo] - Reply-to email (optional)
 * @param {Array} [emailData.attachments] - Array of attachment objects (optional)
 * @returns {Promise<Object>} Response from Mailgun API
 */
export async function sendEmail(emailData) {
  const {
    to,
    subject,
    text,
    html,
    from = `noreply@${MAILGUN_DOMAIN}`,
    replyTo,
    attachments = []
  } = emailData;

  // Validate required fields
  if (!to || !subject || !text) {
    throw new Error('Missing required fields: to, subject, and text are required');
  }

  if (!MG_API_KEY || !MAILGUN_DOMAIN) {
    throw new Error('Mailgun API key and domain must be configured in environment variables');
  }

  // Create form data
  const formData = new FormData();
  formData.append('from', from);
  formData.append('to', to);
  formData.append('subject', subject);
  formData.append('text', text);

  if (html) {
    formData.append('html', html);
  }

  if (replyTo) {
    formData.append('h:Reply-To', replyTo);
  }

  // Handle attachments
  if (attachments.length > 0) {
    attachments.forEach((attachment, index) => {
      if (attachment.filename && attachment.data) {
        formData.append('attachment', attachment.data, attachment.filename);
      }
    });
  }

  try {
    const response = await fetch(`${apiUrl}`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(`api:${MG_API_KEY}`).toString('base64')}`
      },
      body: formData
    });

     // Check if response is ok before trying to parse JSON
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Mailgun API Error:', {
        status: response.status,
        statusText: response.statusText,
        body: errorText,
        domain: MAILGUN_DOMAIN,
        hasApiKey: !!MAILGUN_API_KEY
      });
      
      // Common error messages
      if (response.status === 403) {
        throw new Error('Mailgun authentication failed. Check your API key and domain configuration.');
      } else if (response.status === 401) {
        throw new Error('Mailgun unauthorized. Verify your API key is correct.');
      } else if (response.status === 400) {
        throw new Error(`Mailgun bad request: ${errorText}`);
      } else {
        throw new Error(`Mailgun API error (${response.status}): ${errorText}`);
      }
    }
    const result = await response.json();

    console.log(result)

    return {
      success: true,
      messageId: result.id,
      message: result.message
    };

  } catch (error) {
    console.error('Error sending email:', error);
    // @ts-ignore
    throw new Error(`Failed to send email: ${error.message}`);
  }
}
/**
 * Send order confirmation email
 * @param {Object} orderData - Order confirmation data
 * @param {string} orderData.to - Customer email address
 * @param {string} orderData.orderDetailsUrl - URL to order details page
 * @param {string} orderData.contactUrl - URL to contact page
 * @param {string} orderData.returnPolicyUrl - URL to return policy/order instructions page
 * @param {string} [orderData.from] - Sender email (optional)
 * @returns {Promise<Object>} Response from Mailgun API
 */
export async function sendOrderConfirmationEmail(orderData) {
  const {
    to,
    orderDetailsUrl,
    from = `noreply@${MAILGUN_DOMAIN}`
  } = orderData;

  if (!to || !orderDetailsUrl) {
    throw new Error('Missing required fields: to, orderDetailsUrl are required');
  }

  const subject = 'TILAUSVAHVISTUS';
  
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="font-size: 24px; margin-bottom: 20px;">TILAUSVAHVISTUS</h1>
      
      <p style="font-size: 16px; margin-bottom: 20px;"><strong>KIITOS TILAUKSESTASI!</strong></p>
      
      <p style="margin-bottom: 15px;"><strong>Tilaustiedot</strong> <a href="${orderDetailsUrl}" style="color: #0066cc;">linkistä</a> löydät tilaukseesi liittyvät ohjelmat:</p>
      
      <ul style="margin-bottom: 20px; padding-left: 20px;">
        <li style="margin-bottom: 10px;">Mikäli tilasit hoidon ja tarvitset siihen ajanvarauksen varaa aika <strong>tilaustiedot</strong> <a href="${orderDetailsUrl}" style="color: #0066cc;">linkistä</a> tai kotisivujen nettiajanvarauksesta.</li>
        
        <li style="margin-bottom: 10px;">Jos tilasit hoitavan äänitteen tai pdf tiedostona tulevat valmennukset, e-kirjat, ym. tuotteet saat ne käyttöösi <strong>tilaustiedot</strong> <a href="${orderDetailsUrl}" style="color: #0066cc;">linkin</a> kautta.</li>
        
        <li style="margin-bottom: 10px;">Mikäli tilasit fyysisiä tuotteita, toimitusaika on 2-3 vrk ja ne toimitetaan postin välityksellä. Saat ilmoituksen sähköpostiisi, kun tilauksesi on lähtenyt toimipaikasta ja on matkalla luoksesi!</li>
      </ul>
      
      <p style="margin-bottom: 15px;">Onko sinulla kysyttävää tilauksestasi?</p>
      
      <p style="margin-bottom: 15px;">Ota meihin yhteyttä mieluiten sähköpostilla <a href="https://www.hyvinvointikeskusluxus.com/info/yhteystiedot" style="color: #0066cc;">yhteystiedot</a> sivulta.</p>
      
      <p style="margin-bottom: 20px;">Tuotteiden palautusohjeet löytyvät <a href="https://www.hyvinvointikeskusluxus.com/info/tilausohjeet" style="color: #0066cc;">täältä</a></p>
      
      <p style="margin-bottom: 10px;"><strong>Parhainta hyvinvointia Sinulle!</strong></p>
      
      <p style="margin-bottom: 5px;">Ystävällisin terveisin,</p>
      <p style="margin-bottom: 5px;">Susanna Höijer</p>
      <p>Hyvinvointikeskus Luxus</p>
      <img src="https://i.imgur.com/ajD1lAd.png" alt="banner" width="400px" height="400px">
    </div>
  `;

  const textContent = `
TILAUSVAHVISTUS

KIITOS TILAUKSESTASI!

Tilaustiedot linkistä löydät tilaukseesi liittyvät ohjelmat:
${orderDetailsUrl}

- Mikäli tilasit hoidon ja tarvitset siihen ajanvarauksen varaa aika tilaustiedot linkistä tai kotisivujen nettiajanvarauksesta.

- Jos tilasit hoitavan äänitteen tai pdf tiedostona tulevat valmennukset, e-kirjat, ym. tuotteet saat ne käyttöösi tilaustiedot linkin kautta.

- Mikäli tilasit fyysisiä tuotteita, toimitusaika on 2-3 vrk ja ne toimitetaan postin välityksellä. Saat ilmoituksen sähköpostiisi, kun tilauksesi on lähtenyt toimipaikasta ja on matkalla luoksesi!

Onko sinulla kysyttävää tilauksestasi?

Ota meihin yhteyttä mieluiten sähköpostilla: https://www.hyvinvointikeskusluxus.com/info/yhteystiedot

Tuotteiden palautusohjeet löytyvät täältä: https://www.hyvinvointikeskusluxus.com/info/tilausohjeet

Parhainta hyvinvointia Sinulle!

Ystävällisin terveisin,
Susanna Höijer
Hyvinvointikeskus Luxus
  `;

  return await sendEmail({
    to,
    from,
    subject,
    text: textContent,
    html: htmlContent
  });
}