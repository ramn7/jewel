"use client";

import React from "react";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

export const AppClientWrapper = (props: { children: React.ReactNode }) => {
  const { status: sessionStatus } = useSession();

  React.useEffect(() => {
    if (sessionStatus === "unauthenticated") {
      redirect("/");
    }
  }, [sessionStatus]);
  let body = (
    <div className="w-full h-full overflow-hidden">{props.children}</div>
  );
  return body;
};
