import "./globals.css";

import type { Metadata } from "next";

import Provider from "./Provider";
import { authOptionsWithLogError } from "./api/auth/[...nextauth]/AuthOptions";
import { Geist, Geist_Mono } from "next/font/google";
import { getServerSession } from "next-auth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jewel",
  description: "Automate Jewelry design requests workflows",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(
    authOptionsWithLogError(console.error)
  );

  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        <Provider session={session}>{children}</Provider>
      </body>
    </html>
  );
}
