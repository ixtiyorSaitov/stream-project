export const runtime = "nodejs"; // <-- bu qo‘shilmasa, Edge bo‘ladi

export async function POST(req: Request) {
  console.log("✅ Webhook HIT:", new Date().toISOString());

  return new Response("OK", { status: 200 });
}
