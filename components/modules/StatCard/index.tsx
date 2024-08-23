import clsx from "clsx";
import Image from "next/image";
import { CalendarDays } from "lucide-react";

type StatCardProps = {
  type: "appointments" | "pending" | "cancelled" | "";
  count: number;
  label: string;
  icon?: string;
  onClick: (status: string) => void;
};

export const StatCard = ({
  count = 0,
  label,
  icon,
  type,
  onClick,
}: StatCardProps) => {
  let status = "";
  switch (type) {
    case "appointments":
      status = "scheduled";
      break;
    case "pending":
      status = "pending";
      break;
    case "cancelled":
      status = "cancelled";
      break;
    default:
      status = "";
  }
  return (
    <button
      onClick={() => onClick(status)}
      className={clsx("stat-card", {
        "bg-appointments": type === "appointments",
        "bg-pending": type === "pending",
        "bg-cancelled": type === "cancelled",
      })}
    >
      <div className="flex items-center gap-4">
        {icon ? (
          <Image
            src={icon}
            height={32}
            width={32}
            alt="appointments"
            className="size-8 w-fit"
          />
        ) : (
          <CalendarDays className="size-8 w-fit" />
        )}

        <h2 className="text-32-bold text-theme">{count}</h2>
      </div>

      <p className="text-16-regular font-inter">{label}</p>
    </button>
  );
};
