import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

// import { RegisterForm } from "@/components/modules/forms/RegisterForm";

const RegisterForm = dynamic(
  () => import("@/components/modules/forms/RegisterForm"),
  { ssr: false, loading: () => <p>Loading...</p> },
);

import { getPatient, getUser } from "@/lib/actions/patient.actions";
import dynamic from "next/dynamic";

export const fetchCache = "force-no-store";

export default async function RegisterPage({
  params: { userId },
}: SearchParamProps) {
  const patient = await getPatient(userId);

  if (patient) redirect(`/patients/${userId}/new-appointment`);

  const user = await getUser(userId);

  return (
    <div className="flex min-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container min-h-screen max-w-[666px]">
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

          <RegisterForm user={user} />

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
      </section>

      <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px]"
      />
    </div>
  );
}
