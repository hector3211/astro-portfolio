const POST = async ({ request }) => {
  const data = await request.formData();
  const honeyPot = data.get("honeypot");
  if (honeyPot) {
    return new Response(
      JSON.stringify({
        message: "Bad request"
      }),
      { status: 400 }
    );
  }
  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");
  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields"
      }),
      { status: 400 }
    );
  }
  {
    return new Response(
      JSON.stringify({
        message: "failed sending email, please try again later"
      }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
