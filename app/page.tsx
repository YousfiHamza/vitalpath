import Link from "next/link";
import { CalendarArrowDown } from "lucide-react";

import HeroSection from "@/components/sections/HeroSection";
import { Navbar } from "@/components/modules/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CallToActionSection } from "@/components/sections/CallToActionSection";

const NavLinks = [
  {
    href: "/#how-it-works",
    label: "How it works",
  },
  {
    href: "https://hamza.yousfi.dev",
    label: "Contact",
  },
];

export default function Home() {
  return (
    <>
      {/* Dotted Background */}
      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-dot-black/[0.3] dark:bg-dot-white/[0.3]">
        <div className="dark:bg-black-100 bg-theme pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]" />
      </div>
      {/* Main Page Content */}
      <Navbar links={NavLinks}>
        <Link
          href="/login"
          className="flex h-10 w-10 items-center justify-center gap-3 rounded-full bg-green-700 p-1 font-mono font-semibold text-slate-100 hover:opacity-75 dark:bg-green-800 hover:dark:bg-green-700 hover:dark:text-white hover:dark:opacity-100 md:w-auto md:rounded-lg md:px-2 md:py-1"
        >
          <span className="hidden md:block">Book Now</span>{" "}
          <CalendarArrowDown className="h-5 w-5 text-slate-100" />
        </Link>
      </Navbar>
      <main className="relative z-30 mx-auto max-w-7xl p-5 pb-0 md:p-10 md:pb-0">
        <HeroSection />
        <CallToActionSection />
        <Footer />
      </main>
    </>
  );
}
