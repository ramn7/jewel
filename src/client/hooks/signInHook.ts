import { signIn as nextAuthSignIn } from "next-auth/react";

export const useSignIn = () => {
  return () => nextAuthSignIn(undefined);
};

export const useProviderSignIn = () => {
  return (provider: "google" | "github") => nextAuthSignIn(provider);
};

// BLA VLA
