"use client";

import { Button } from "@/client/components/ui/button";
import { signOut as nextAuthSignOut } from "next-auth/react";

export const signOut = async () => {
  await nextAuthSignOut();
};

export const Welcome = () => {
  return (
    <div className="flex gap-4 items-center flex-col">
      <span>AUTHED!</span>
      <Button onClick={signOut}>Sign out</Button>
    </div>
  );
};
