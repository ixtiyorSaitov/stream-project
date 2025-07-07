"use server";

import { actionClient } from "@/lib/safe.action";

export const getHomeFeed = actionClient.action(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { feed: data };
});

const data = [
  {
    id: "1",
    thumbnail:
      "https://www.0xkishan.com/_next/image?url=%2Fblogs%2Fnextjs%2Fhero.png&w=3840&q=75",
    createdAt: new Date("2025-01-01T12:00:00Z"),
    title: "Next js",
    user: {
      id: "1",
      username: "ixti2101",
      avatar: "https://github.com/shadcn.png",
      followedBy: 8,
    },
  },
  {
    id: "2",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*qJppTMduXXhjgU2tZt9SfQ.png",
    createdAt: new Date("2025-01-01T12:00:00Z"),
    title: "Vue js",
    user: {
      id: "1",
      username: "ixti2101",
      avatar: "https://github.com/shadcn.png",
      followedBy: 8,
    },
  },
];
