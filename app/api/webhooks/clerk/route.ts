// app/api/webhooks/clerk/route.ts
export async function POST(req: Request) {
  const body = await req.text(); // JSON parse qilishdan oldin log chiqaramiz
  console.log("✅ Webhook raw body:", body);

  return new Response("OK", { status: 200 });
}
