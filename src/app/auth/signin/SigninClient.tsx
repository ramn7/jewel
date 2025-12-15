"use client";

import Image from "next/image";
import { APP_NAME } from "@/client/misc/misc";
import { Button } from "@/client/components/ui/button";
import { useProviderSignIn } from "@/client/hooks/signInHook";

export const SignInClient = () => {
  const signIn = useProviderSignIn();

  return (
    <div className="flex flex-col items-center">
      <div className="mb-12">
        <h2 className="text-4xl text-stone-700 font-semibold">Sign in</h2>
      </div>
      <div className="w-full mb-8">
        <SigninButton
          signIn={() => signIn("google")}
          image={{
            src: "https://authjs.dev/img/providers/google.svg",
            alt: "Google logo",
          }}
          name="Google"
        />
      </div>
      <span className="text-base/5 text-stone-400">
        Access to {APP_NAME} is limited, you might be added to a waiting list on
        sign up.
      </span>
    </div>
  );
};

const SigninButton = (props: {
  signIn: () => void;
  image: { src: string; alt: string };
  name: string;
}) => {
  return (
    <Button
      className="rounded-sm p-6 w-full"
      onClick={props.signIn}
      variant="outline"
    >
      <div className="flex flex-row items-center flex-nowrap">
        <Image
          src={props.image.src}
          width={24}
          height={24}
          className="mr-8 block"
          alt={props.image.alt}
          priority
        />
        <span className="font-medium text-lg">Sign in with {props.name}</span>
      </div>
    </Button>
  );
};
