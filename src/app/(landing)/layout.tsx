import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import Image from "next/image";
import { SignIn } from "~/components/SignIn";
import BasicLogo from "~/assets/basic-logo.png"
import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  const session = await getServerAuthSession();

  return (
    <>
      <nav className="border-b border-b-zinc-900">
        <div className="mx-auto flex w-full items-center justify-between p-4 text-sm xl:max-w-7xl">
          <Link
            href="/"
            className="flex items-center gap-2 text-base font-bold"
          >
            <Image src={BasicLogo} alt="Logotype" width="20" height="20" />
            envirovault.dev
          </Link>
          <ul className="flex items-center gap-8">
            <li>
              <Link href="/">Docs</Link>
            </li>
            <li>{session ? <a href="/envs">Dashboard</a> : <SignIn />}</li>
          </ul>
        </div>
      </nav>
      {children}
    </>
  );
}
