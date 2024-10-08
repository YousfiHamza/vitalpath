import Image from "next/image";
import Link from "next/link";

import { PatientForm } from "@/components/modules/forms/PatientForm";
import { PasskeyModal } from "@/components/modules/PassKeyModal";

export default function LoginPage({ searchParams }: SearchParamProps) {
  const isAdmin = searchParams?.admin === "true";

  return (
    <div className="flex min-h-screen">
      {isAdmin && <PasskeyModal />}
      <div className="remove-scrollbar container my-auto">
        <div className="sub-container min-h-screen max-w-[496px]">
          <Link
            href="/"
            className="flex h-10 w-fit items-center gap-2 md:mb-12"
          >
            <Image
              src="/assets/icons/logo-icon.svg"
              height={1000}
              width={1000}
              alt="patient"
              className="h-10 w-fit"
            />{" "}
            <span className="font-inter text-4xl font-bold text-slate-600 dark:text-light-200">
              VitalPath
            </span>
          </Link>
          <PatientForm />
          <div className="text-14-regular mt-12 flex justify-between md:mt-20">
            <p className="justify-items-end text-dark-500 dark:text-dark-600 xl:text-left">
              © 2024 CarePluse
            </p>
            <Link
              href="/login/?admin=true"
              className="text-green-500 hover:font-bold hover:underline"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>

      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
