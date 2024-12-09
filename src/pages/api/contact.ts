import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const honeyPot = data.get("honeypot");
  if (honeyPot) {
    return new Response(
      JSON.stringify({
        message: "Bad request",
      }),
      { status: 400 },
    );
  }
  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");
  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 },
    );
  }
  const key = import.meta.env.SECRET_PLUNK_API_KEY;
  const businessEmail = import.meta.env.SECRET_BUSINESS_EMAIL;
  console.log(`key: ${key}`);
  console.log(`email: ${businessEmail}`);
  if (!key || !businessEmail) {
    return new Response(
      JSON.stringify({
        message: "failed sending email, please try again later",
      }),
      { status: 500 },
    );
  }
  try {
    await fetch("https://api.useplunk.com/v1/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({
        to: businessEmail,
        subject: "New Freelance Job Booking!",
        body: `
        <!DOCTYPE html>
        <html lang="en">
        <body style="font-family:Arial;max-width:600px;margin:auto;color:#333;line-height:1.6;padding:10px;">
            <div style="background-color:#000;color:white;text-align:center;padding:10px;">
                <h1 style="margin:0;font-size:20px;">New Client Inquiry</h1>
            </div>
            <div style="padding:15px;">
                <p><strong>Name:</strong> ${name.toString()}</p>
                <p><strong>Email:</strong> ${email.toString()}</p>
                <p><strong>Message:</strong> ${message.toString().trim()}</p>
            </div>
        </body>
        </html>
        `,
      }),
    });
    return new Response("Message sent!", { status: 200 });
  } catch (err) {
    // console.log(`failed sending email: ${err as string}`);
    return new Response(
      JSON.stringify({
        message: "failed sending email, please try again later",
      }),
      { status: 500 },
    );
  }
};
