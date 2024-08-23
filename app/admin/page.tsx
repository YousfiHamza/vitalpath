import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";
import { AdminPanel } from "@/components/sections/AdminPanel";

const LogoutButton = dynamic(
  () => import("@/components/ui/LogoutButton").then(mod => mod.LogoutButton),
  {
    ssr: false,
  },
);

export default async function AdminPage() {
  const appointments = await getRecentAppointmentList();

  return (
    <div className="relative mx-auto flex max-w-7xl flex-col space-y-7">
      <header className="admin-header flex justify-between">
        <Link href="/" className="flex h-10 flex-1 items-center gap-2">
          <Image
            src="/assets/icons/logo-icon.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="h-10 w-fit"
          />{" "}
          <span className="font-inter text-4xl font-bold text-slate-600 dark:text-light-200">
            CarePulse
          </span>
        </Link>
        <LogoutButton />
      </header>

      <main className="admin-main">
        <section className="w-full space-y-2 font-inter">
          <h1 className="header">Welcome Admin 👋</h1>
          <p className="text-theme italic opacity-75">
            Start the day with managing new appointments
          </p>
        </section>
        <AdminPanel appointments={appointments} />
      </main>
    </div>
  );
}
