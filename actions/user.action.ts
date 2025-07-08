"use server";

import { actionClient } from "@/lib/safe.action";
import { usernameSchema } from "@/lib/validation";

export const getRecommended = actionClient.action(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { recommended: data };
});

export const getFollowing = actionClient.action(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { following: data };
});

export const getUserByUsername = actionClient
  .schema(usernameSchema)
  .action(async ({ parsedInput }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const { username } = parsedInput;
    const user = data.find((user) => user.username === username);

    return { user };
  });

const data = [
  {
    id: "1",
    username: "ixti2101",
    avatar: "https://github.com/shadcn.png",
    followedBy: 8,
    fullName: "Ixtiyor Saitov",
  },
  {
    id: "2",
    username: "oman",
    avatar: "https://github.com/shadcn.png",
    followedBy: 23,
    fullName: "Ixtiyor Saitov",
  },
  {
    id: "3",
    username: "ixtiyorsaitov",
    avatar: "https://github.com/shadcn.png",
    followedBy: 23,
    fullName: "Ixtiyor Saitov",
  },
];
