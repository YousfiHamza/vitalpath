import Link from "next/link";
import Image from "next/image";

import { NavbarProps } from "./types";

export function Navbar({ links = [], children }: NavbarProps) {
  return (
    <header className="navbar relative flex max-w-7xl flex-col justify-between sm:flex-row">
      <div className="flex-1">
        <Link href="/" className="flex h-10 w-fit items-center gap-2">
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
          <span className="sr-only">CarePulse Home Page</span>
        </Link>
      </div>
      {links.length > 0 && (
        <nav className="mt-4 flex items-center justify-end sm:mt-0">
          {links.map(({ href, label }, idx) => (
            <Link
              href={href}
              key={href + idx}
              className="text-theme mr-6 font-inter text-base transition-all ease-in-out hover:scale-105 hover:font-medium hover:text-black dark:hover:text-white"
            >
              {label}
            </Link>
          ))}
          <div>{children}</div>
        </nav>
      )}
    </header>
  );
}
