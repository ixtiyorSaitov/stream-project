export interface ClerkWebhookEvent {
  type: string;
  data: {
    id: string;
    username: string | null;
    first_name: string | null;
    last_name: string | null;
    image_url: string;
    email_addresses: Array<{
      email_address: string;
    }>;
  };
}

export type UserCreatedEvent = ClerkWebhookEvent & { type: "user.created" };
export type UserUpdatedEvent = ClerkWebhookEvent & { type: "user.updated" };
export type UserDeletedEvent = ClerkWebhookEvent & { type: "user.deleted" };

export type ClerkEvent = UserCreatedEvent | UserUpdatedEvent | UserDeletedEvent;
