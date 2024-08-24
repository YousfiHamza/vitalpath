import Link from "next/link";
import Image from "next/image";
import { CalendarArrowDown } from "lucide-react";

import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <>
      {/* Dotted Background */}
      <div className="bg-dot-black/[0.3] dark:bg-dot-white/[0.3] absolute left-0 top-0 flex h-screen w-full items-center justify-center">
        <div className="dark:bg-black-100 bg-theme pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]" />
      </div>
      {/* Main Page Content */}
      <header className="home-header relative flex max-w-7xl justify-between">
        <div className="flex-1">
          <Link href="#" className="flex h-10 w-fit items-center gap-2">
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
        </div>
        <Link
          href="/login"
          className="flex h-10 w-10 items-center justify-center gap-3 rounded-full bg-green-700 p-1 font-mono font-semibold text-slate-100 hover:opacity-75 dark:bg-green-800 hover:dark:bg-green-700 hover:dark:text-white hover:dark:opacity-100 md:w-auto md:rounded-lg md:px-2 md:py-1"
        >
          <span className="hidden md:block">Book Now</span>{" "}
          <CalendarArrowDown className="h-5 w-5 text-slate-100" />
        </Link>
      </header>
      <main className="relative z-30 mx-auto max-w-7xl p-5 md:p-10">
        <HeroSection />
      </main>
    </>
  );
}
