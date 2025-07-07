"use server";

import { actionClient } from "@/lib/safe.action";

export const getRecommended = actionClient.action(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { recommended: data };
});

export const getFollowing = actionClient.action(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { following: data };
});

const data = [
  {
    id: "1",
    username: "ixti2101",
    avatar: "https://github.com/shadcn.png",
    followedBy: 8,
  },
  {
    id: "2",
    username: "oman",
    avatar: "https://github.com/shadcn.png",
    followedBy: 23,
  },
];
