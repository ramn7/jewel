import { AppHomePath } from "@/client/misc/misc";
import { authOptionsWithLogError } from "../api/auth/[...nextauth]/AuthOptions";
import { AuthPageLayoutClient } from "./AuthPageLayoutClient";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function AuthLayout(props: { children: React.ReactNode }) {
  const session = await getServerSession(
    authOptionsWithLogError(console.error)
  );
  if (session) {
    redirect(AppHomePath);
  }

  return <AuthPageLayoutClient>{props.children}</AuthPageLayoutClient>;
}
