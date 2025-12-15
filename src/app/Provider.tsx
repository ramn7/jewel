"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

const Provider = (props: {
  children: React.ReactNode;
  session: Session | null;
}) => {
  return (
    <SessionProvider session={props.session}>{props.children}</SessionProvider>
  );
};

export default Provider;
