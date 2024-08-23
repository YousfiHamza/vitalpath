"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { StatCard } from "@/components/modules/StatCard";
import { columns } from "@/components/modules/table/columns";
import { DataTable } from "@/components/modules/table/DataTable";
import { decryptKey } from "@/lib/utils";

export default function LoadingAdminPage() {
  useEffect(() => {
    const encryptedKey =
      typeof window !== "undefined"
        ? window.sessionStorage.getItem("accessKey")
        : null;

    const accessKey = encryptedKey && decryptKey(encryptedKey);

    if (accessKey !== process.env.NEXT_PUBLIC_ADMIN_PASSKEY!.toString()) {
      redirect("/login");
    }
  }, []);

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
            count={0}
            label="Scheduled appointments"
            icon={"/assets/icons/appointments.svg"}
          />
          <StatCard
            type="pending"
            count={0}
            label="Pending appointments"
            icon={"/assets/icons/pending.svg"}
          />
          <StatCard
            type="cancelled"
            count={0}
            label="Cancelled appointments"
            icon={"/assets/icons/cancelled.svg"}
          />
        </section>

        <DataTable columns={columns} data={[]} />
      </main>
    </div>
  );
}
