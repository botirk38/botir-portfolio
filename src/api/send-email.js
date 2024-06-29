const axios = require('axios');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  try {
    const response = await axios.post(
      'https://api.resend.com/emails',
      {
        from: `${name} <${email}>`,
        to: ['youremail@gmail.com'], // Your email here
        subject: 'New Contact Message',
        text: message,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error sending email' });
  }
};

