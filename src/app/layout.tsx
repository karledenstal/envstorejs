import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import { SignIn } from "~/components/SignIn";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "envstore",
  description: "Store, retrieve and share environment variables in a secure way.",
  icons: [{ rel: "icon", url: "/favicon.png" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`font-sans ${inter.variable} bg-zinc-950 text-zinc-50`}>
        <TRPCReactProvider>
          <div className="border-b border-b-zinc-900">
            <div className="mx-auto flex w-full items-center justify-between p-4 text-sm xl:max-w-7xl">
              <Link href="/" className="text-base font-bold">
                envstorejs
              </Link>
              <ul className="flex items-center gap-8">
                <li>
                  <Link href="/">Docs</Link>
                </li>
                <li>
                  {session ? (
                    <a href="https://app.envstorejs.dev">Dashboard</a>
                  ) : (
                    <SignIn />
                  )}
                </li>
              </ul>
            </div>
          </div>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
