import Image from "next/image";
import Link from "next/link";

export async function Footer() {
  return (
    <footer className="mx-auto mt-6 flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-slate-600 py-7 md:mt-10 md:flex-row">
      <Link href="#" className="flex h-10 w-fit items-center gap-2">
        <Image
          src="/assets/icons/logo-icon.svg"
          alt="logo"
          width={159}
          height={25}
          className="h-10 w-fit"
        />{" "}
        <span className="font-inter text-4xl font-bold text-slate-600 dark:text-light-200">
          VitalPath
        </span>
        <span className="sr-only">VitalPath Home Page</span>
      </Link>
      <nav aria-label="Footer" className="w-full">
        <ul className="text-theme mb-3 flex w-full justify-evenly text-sm font-medium sm:mb-0 sm:gap-10 sm:text-lg md:justify-end">
          <li className="inline-flex min-h-11 items-center hover:underline">
            <Link href="/login">Book Now</Link>
          </li>
          <li className="inline-flex min-h-11 items-center hover:underline">
            <Link href="https://hamza.yousfi.dev" target="_blank">
              Contact
            </Link>
          </li>
          <li className="inline-flex min-h-11 items-center hover:underline">
            <Link href="/#how-it-works">How It Works</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
