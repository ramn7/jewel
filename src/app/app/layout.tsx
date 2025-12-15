import { AppClientWrapper } from "./AppClientWrapper";

export default async function AppLayout(props: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col justify-start w-full h-full">
      <AppClientWrapper>{props.children}</AppClientWrapper>
    </main>
  );
}
