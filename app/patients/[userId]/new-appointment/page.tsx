import Image from "next/image";
import Link from "next/link";

import { AppointmentForm } from "@/components/modules/forms/AppointmentForm";

import { getPatient } from "@/lib/actions/patient.actions";

export const fetchCache = "force-no-store";

export default async function AppointmentPage({
  params: { userId },
}: SearchParamProps) {
  const patient = await getPatient(userId);

  return (
    <div className="flex min-h-screen">
      <div className="remove-scrollbar container my-auto">
        <div className="sub-container min-h-screen max-w-[496px]">
          <Link href="/" className="flex h-10 w-fit items-center gap-2 md:mb-4">
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
          <AppointmentForm
            patientId={patient?.$id}
            userId={userId}
            type="create"
          />
          <div className="text-14-regular mt-10 flex justify-between">
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
        src="/assets/images/appointment-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
