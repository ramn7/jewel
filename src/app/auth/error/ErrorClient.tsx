"use client";

import Link from "next/link";
import { APP_NAME } from "@/client/misc/misc";
import { Button } from "@/client/components/ui/button";
import { useSearchParams } from "next/navigation";

export const ErrorClient = () => {
  const searchParams = useSearchParams();

  const errorCode = searchParams.get("error");

  return (
    <div className="flex flex-col">
      <span
        style={{
          fontSize: "1.6em",
          marginBottom: "48px",
          textAlign: "center",
        }}
      >
        {errorCode === "AccessDenied"
          ? `Added to waitlist`
          : `Error Signing in`}
      </span>
      <span
        style={{
          fontSize: "1em",
          lineHeight: "1.4em",
          // color: LIGHT_TEXT_COLOR,
          color: "#ddd",
          marginBottom: "32px",
        }}
      >
        {errorCode === "AccessDenied"
          ? `Access to ${APP_NAME} is currently limited. You were added to the waiting list and we will let you know when it's available for you.`
          : undefined}
      </span>
      <div className="self-center">
        <Link href="/" passHref>
          <Button>Go Back</Button>
        </Link>
      </div>
    </div>
  );
};
