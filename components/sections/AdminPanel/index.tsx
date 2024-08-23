"use client";

import { useEffect, useState } from "react";

import { StatCard } from "@/components/modules/StatCard";
import { columns } from "@/components/modules/table/columns";
import { DataTable } from "@/components/modules/table/DataTable";

export function AdminPanel({ appointments }: { appointments: any }) {
  const [myAppointments, setMyAppointments] = useState(appointments.documents);
  const [status, setStatus] = useState("");

  const handleStatusChange = (status: string) => {
    setStatus(status);
  };

  useEffect(() => {
    setMyAppointments(
      status !== ""
        ? appointments.documents.filter(
            (appointment: any) => appointment.status === status,
          )
        : appointments.documents,
    );
  }, [status]);

  return (
    <>
      <section className="admin-stat">
        <StatCard
          type=""
          count={appointments.totalCount}
          label="All appointments"
          onClick={handleStatusChange}
        />
        <StatCard
          type="appointments"
          count={appointments.scheduledCount}
          label="Scheduled appointments"
          icon={"/assets/icons/appointments.svg"}
          onClick={handleStatusChange}
        />
        <StatCard
          type="pending"
          count={appointments.pendingCount}
          label="Pending appointments"
          icon={"/assets/icons/pending.svg"}
          onClick={handleStatusChange}
        />
        <StatCard
          type="cancelled"
          count={appointments.cancelledCount}
          label="Cancelled appointments"
          icon={"/assets/icons/cancelled.svg"}
          onClick={handleStatusChange}
        />
      </section>

      <DataTable columns={columns} data={myAppointments} />
    </>
  );
}
