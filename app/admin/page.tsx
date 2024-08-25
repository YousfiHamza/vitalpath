import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import { AdminPanel } from "@/components/sections/AdminPanel";
import { Navbar } from "@/components/modules/Navbar";

import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";

const LogoutButton = dynamic(
  () => import("@/components/ui/LogoutButton").then(mod => mod.LogoutButton),
  {
    ssr: false,
  },
);

const links = [
  {
    href: "https://hamza.yousfi.dev",
    label: "Contact",
  },
];

export default async function AdminPage() {
  const appointments = await getRecentAppointmentList();

  return (
    <>
      {/* Dotted Background */}
      <div className="absolute bottom-0 left-0 top-0 flex min-h-full w-full items-center justify-center bg-dot-black/[0.3] dark:bg-dot-white/[0.4]">
        <div className="bg-theme [mask-image:dark:radial-gradient(ellipse_at_center,transparent_50%,black)] pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]" />
      </div>
      <Navbar links={links}>
        <LogoutButton />
      </Navbar>
      <main className="relative mx-auto mt-6 flex max-w-7xl flex-col space-y-7 md:mt-12">
        <div className="admin-main">
          <section className="w-full space-y-2 font-inter">
            <h1 className="header">Welcome Admin 👋</h1>
            <p className="text-theme italic opacity-75">
              Start the day with managing new appointments
            </p>
          </section>
          <AdminPanel appointments={appointments} />
        </div>
      </main>
    </>
  );
}
