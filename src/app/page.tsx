import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  noStore();
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <main>
      <header className="w-full xl:max-w-7xl mx-auto py-20 text-center">
        <h1 className="text-6xl font-bold">Secure your environment</h1>
        <p className="w-[45%] mx-auto text-zinc-400 mt-8 text-xl">Store, retrieve & share your projects environment variables in an easy and secure way.</p>
      </header>
    </main>
  );
}

