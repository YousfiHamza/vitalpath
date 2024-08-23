"use client";

import { PowerCircle } from "lucide-react";

export function LogoutButton() {
  const handleLogout = () => {
    window.sessionStorage.removeItem("accessKey");
    window.location.href = "/";
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-1 rounded-full bg-red-700 px-2 py-1 font-mono font-semibold text-slate-100 hover:opacity-75 dark:bg-red-800 hover:dark:bg-red-700 hover:dark:text-white hover:dark:opacity-100"
    >
      <span className="hidden md:block">Logout</span>{" "}
      <PowerCircle className="h-5 w-5 text-slate-100" />
    </button>
  );
}
