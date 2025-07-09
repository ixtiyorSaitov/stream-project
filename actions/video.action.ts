"use server";

import { actionClient } from "@/lib/safe.action";

export const getComments = actionClient.action(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { comments: data };
});

const data = [
  {
    id: "1",

    createdAt: new Date("2025-01-01T12:00:00Z"),
    content: "Hello world",
    user: {
      id: "1",
      username: "ixti2101",
      avatar: "https://github.com/shadcn.png",
      followedBy: 8,
    },
  },
  {
    id: "2",
    createdAt: new Date("2025-01-01T12:00:00Z"),
    content: "Great video about lorem ipsum dollor set 20255 Paris",
    user: {
      id: "1",
      username: "ixti2101",
      avatar: "https://github.com/shadcn.png",
      followedBy: 8,
    },
  },
];
