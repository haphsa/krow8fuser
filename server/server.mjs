import 'dotenv/config';
import express from 'express';

const app = express();
const port = Number(process.env.PORT || 3001);
app.use(express.json({ limit: '32kb' }));

app.post('/api/contact', async (request, response) => {
  const { RESEND_API_KEY, CONTACT_EMAIL, RESEND_FROM } = process.env;
  if (!RESEND_API_KEY || !CONTACT_EMAIL || !RESEND_FROM) {
    return response.status(503).json({ message: 'Contact service is not configured yet.' });
  }

  const { name, email, phone, company, quantity, techPackStatus, notes } = request.body || {};
  if (!name || !email || !company || !phone) {
    return response.status(400).json({ message: 'Name, company, email, and phone are required.' });
  }

  const text = [
    `Name: ${name}`,
    `Company: ${company}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Target Quantity: ${quantity || 'Not provided'}`,
    `Tech Pack Status: ${techPackStatus || 'Not provided'}`,
    '',
    'Garment Specs & Notes:',
    notes || 'Not provided'
  ].join('\n');

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: RESEND_FROM,
        to: [CONTACT_EMAIL],
        reply_to: email,
        subject: `Production Quote Request - ${company}`,
        text
      })
    });

    if (!resendResponse.ok) {
      console.error('Resend error:', await resendResponse.text());
      return response.status(502).json({ message: 'Unable to send your message right now. Please try again.' });
    }

    return response.status(204).end();
  } catch (error) {
    console.error('Contact request failed:', error);
    return response.status(500).json({ message: 'Unable to send your message right now. Please try again.' });
  }
});

app.listen(port, () => console.log(`Contact API listening on http://localhost:${port}`));
