import { Webhook } from "svix";
import { headers } from "next/headers";
import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { ClerkEvent, UserCreatedEvent, UserDeletedEvent, UserUpdatedEvent } from "@/types/clerk-webhook";

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
      return new Response("Error occurred -- no svix headers", {
        status: 400,
      });
    }

    const payload = await req.json();
    const body = JSON.stringify(payload);

    const wh = new Webhook(WEBHOOK_SECRET);
    let evt: ClerkEvent;

    try {
      evt = wh.verify(body, {
        "svix-id": svix_id,
        "svix-timestamp": svix_timestamp,
        "svix-signature": svix_signature,
      }) as ClerkEvent;
    } catch (err) {
      console.error("Webhook verification failed:", err);
      return new Response("Error verifying webhook", { status: 400 });
    }

    switch (evt.type) {
      case "user.created":
        await handleUserCreated(evt);
        break;
      case "user.updated":
        await handleUserUpdated(evt);
        break;
      case "user.deleted":
        await handleUserDeleted(evt);
        break;
      default:
        console.warn("Unhandled event type:");
    }

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error in webhook handler:", err);
    return new Response("Internal server error", { status: 500 });
  }
}

// Alohida handler funksiyalar
async function handleUserCreated(evt: UserCreatedEvent) {
  await db.user.create({
    data: {
      clerkId: evt.data.id,
      username: evt.data.username || `user_${evt.data.id.slice(0, 8)}`,
      avatar: evt.data.image_url,
      fullName: `${evt.data.first_name || ""} ${
        evt.data.last_name || ""
      }`.trim(),
      bio: "Bio is not provided",
    },
  });
}

async function handleUserUpdated(evt: UserUpdatedEvent) {
  await db.user.update({
    where: { clerkId: evt.data.id },
    data: {
      username: evt.data.username || undefined,
      avatar: evt.data.image_url,
      fullName: `${evt.data.first_name || ""} ${
        evt.data.last_name || ""
      }`.trim(),
    },
  });
}

async function handleUserDeleted(evt: UserDeletedEvent) {
  await db.user.delete({
    where: { clerkId: evt.data.id },
  });
}
