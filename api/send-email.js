
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);



export default async function POST(request) {
  try {
    const { name, email, message } = await request.body;

    const { data, error } = await resend.emails.send({
      from: email,
      to: "btrghstk@gmail.com",
      subject: `Portfolio Contact Message from ${name}`,
      text: message,
      tags: [
        {
          name: 'category',
          value: 'contact_email',
        },
      ],
    });

    if (error) {
      return new Response(JSON.stringify(error), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }


    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Error sending email' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

