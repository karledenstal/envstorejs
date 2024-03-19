import "~/styles/globals.css";
import Link from "next/link";
import Image from "next/image";
import { VaultSelect } from "~/components/ProjectSelect"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-screen w-screen overflow-hidden">
      <nav className="w-full max-w-72 border-r border-r-zinc-900">
        <div className="w-full border-b border-b-zinc-900 p-4">
          <Link
            href="/envs"
            className="flex items-center gap-2 text-base font-bold"
          >
            <Image src="/favicon.png" alt="Logotype" width="20" height="20" />
            envirovault.dev
          </Link>
        </div>
        <div className="p-4">
          <VaultSelect />
        </div>
      </nav>
      <section className="flex-1">{children}</section>
    </main>
  );
}
