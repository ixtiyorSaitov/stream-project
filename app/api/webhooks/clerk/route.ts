import { Webhook } from "svix";
import { headers } from "next/headers";
import { PrismaClient } from "@prisma/client";

import { NextRequest } from "next/server";
import { db } from "@/lib/db";
const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

    if (!WEBHOOK_SECRET) {
      throw new Error("CLERK_WEBHOOK_SECRET not configured");
    }

    const headerPayload = await headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    if (!svix_id || !svix_timestamp || !svix_signature) {
      return new Response("Error occured -- no svix headers", { status: 400 });
    }

    const payload = await req.json();
    const body = JSON.stringify(payload);

    const wh = new Webhook(WEBHOOK_SECRET);
    let evt: any;

    try {
      evt = wh.verify(body, {
        "svix-id": svix_id,
        "svix-timestamp": svix_timestamp,
        "svix-signature": svix_signature,
      }) as any;
    } catch (err) {
      return new Response("Error occured", { status: 400 });
    }

    const eventType = evt.type;
    if (eventType === "user.created") {
      await db.user.create({
        data: {
          clerkId: evt.data.id,
          username: evt.data.username!,
          avatar: evt.data.image_url,
          fullName: `${evt.data.first_name} ${evt.data.last_name}`,
          bio: "Bio is not provided !!!",
        },
      });
    }

    if (eventType === "user.updated") {
      await db.user.update({
        where: {
          clerkId: evt.data.id,
        },
        data: {
          username: evt.data.username!,
          avatar: evt.data.image_url,
          fullName: `${evt.data.first_name} ${evt.data.last_name}`,
        },
      });
    }

    if (eventType === "user.deleted") {
      await db.user.delete({
        where: { clerkId: evt.data.id },
      });
    }

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
