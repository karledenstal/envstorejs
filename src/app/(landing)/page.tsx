import { unstable_noStore as noStore } from "next/cache";

export default async function Home() {
  noStore();
  
  return (
    <main>
      <header className="mx-auto grid min-h-[400px] w-full place-items-center bg-gradient-to-b from-orange-500 to-amber-500 py-20 text-center">
        <div>
          <h1 className="text-6xl font-bold">Secure your environment</h1>
          <p className="mx-auto mt-8 text-xl text-white">
            Store, retrieve & share your projects environment variables in an
            easy and secure way.
          </p>
        </div>
      </header>
    </main>
  );
}
