import Image from "next/image";
import Link from "next/link";

import { StatCard } from "@/components/modules/StatCard";
import { columns } from "@/components/modules/table/columns";
import { DataTable } from "@/components/modules/table/DataTable";

import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";

export default async function AdminPage() {
  const appointments = await getRecentAppointmentList();

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-7">
      <header className="admin-header">
        <Link
          href="/"
          className="flex h-10 w-full items-center gap-2 sm:justify-center"
        >
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
      </header>

      <main className="admin-main">
        <section className="w-full space-y-2 font-inter">
          <h1 className="header">Welcome Admin 👋</h1>
          <p className="text-theme italic opacity-75">
            Start the day with managing new appointments
          </p>
        </section>

        <section className="admin-stat">
          <StatCard
            type="appointments"
            count={appointments.scheduledCount}
            label="Scheduled appointments"
            icon={"/assets/icons/appointments.svg"}
          />
          <StatCard
            type="pending"
            count={appointments.pendingCount}
            label="Pending appointments"
            icon={"/assets/icons/pending.svg"}
          />
          <StatCard
            type="cancelled"
            count={appointments.cancelledCount}
            label="Cancelled appointments"
            icon={"/assets/icons/cancelled.svg"}
          />
        </section>

        <DataTable columns={columns} data={appointments.documents} />
      </main>
    </div>
  );
}
