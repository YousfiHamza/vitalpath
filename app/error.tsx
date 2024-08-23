"use client";
import Image from "next/image";
import Link from "next/link";
import { ServerCrashIcon, LucideSend } from "lucide-react";
import SubmitButton from "@/components/ui/SubmitButton";

export default function ErrorPage() {
  return (
    <div className="flex min-h-screen">
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
              CarePulse
            </span>
          </Link>
          <div className="flex w-full flex-col items-center justify-around gap-4">
            <h1 className="flex items-center justify-center gap-4 text-center font-mono text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
              <ServerCrashIcon className="mr-2 h-12 w-12 md:mr-4" />{" "}
              <span className="w-fit">Internal Error!</span>
            </h1>
            <p className="text-theme text-center text-xl italic opacity-75">
              The server has encountered an internal error sign. Please Inform
              the Admin.
            </p>
            <Link href="https://hamza.yousfi.dev" target="_blank">
              <SubmitButton>
                <LucideSend className="mr-2" />
                Contact ADMIN
              </SubmitButton>
            </Link>
          </div>
          <div className="text-14-regular mt-12 flex justify-between md:mt-20">
            <p className="justify-items-end text-dark-500 dark:text-dark-600 xl:text-left">
              © 2024 CarePluse
            </p>
          </div>
        </div>
      </div>

      <Image
        src="/assets/images/doctors.jpg"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
