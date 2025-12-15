"use client";

import { useSignIn } from "@/client/hooks/signInHook";
import { Button } from "../ui/button";
import { APP_NAME } from "@/client/misc/misc";

export const Landing = () => {
  const signIn = useSignIn();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-(family-name:--font-geist-sans)">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col">
          <span>{APP_NAME}</span>
          <Button onClick={signIn}>Sign in</Button>
        </div>
      </main>
      <footer className=""></footer>
    </div>
  );
};
