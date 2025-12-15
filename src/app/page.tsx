import { AppHomePath } from "@/client/misc/misc";
import { Landing } from "@/client/components/landing/Landing";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const session = await getServerSession();

  if (session) {
    redirect(AppHomePath);
  }

  return <Landing />;
}
