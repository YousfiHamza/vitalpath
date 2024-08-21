import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="bg-theme text-white">
      <h1>hello from Home page</h1>
      <Link href="/login">
        <Button variant="link">Login</Button>
      </Link>
    </main>
  );
}
