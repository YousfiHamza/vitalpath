import Image from "next/image";
import Link from "next/link";

export default async function AdminPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="flex h-10 w-fit items-center gap-2 md:mb-12">
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

        <p className="text-16-semibold">Admin Dashboard</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome Admin 👋</h1>
          <p className="text-dark-700">
            Start the day with managing new appointments
          </p>
        </section>
      </main>
    </div>
  );
}
