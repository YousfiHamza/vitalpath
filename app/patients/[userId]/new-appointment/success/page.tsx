import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Doctors } from "@/lib/constants";
import { getAppointment } from "@/lib/actions/appointment.actions";
import { formatDateTime } from "@/lib/utils";
import { CalendarDays, Home } from "lucide-react";

export default async function AppointementSuccessPage({
  searchParams,
  params: { userId },
}: SearchParamProps) {
  const appointmentId = (searchParams?.appointmentId as string) || "";
  const appointment = await getAppointment(appointmentId);

  const doctor = Doctors.find(
    doctor => doctor.name === appointment.primaryPhysician,
  );

  return (
    <div className="flex h-screen max-h-screen px-[5%]">
      <div className="success-img text-slate-900 dark:text-slate-100">
        <Link href="/" className="flex h-10 w-fit items-center gap-2 md:mb-4">
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

        <section className="flex flex-col items-center">
          <Image
            src="/assets/gifs/success.gif"
            height={300}
            width={280}
            alt="success"
          />
          <h2 className="header mb-6 max-w-[600px] text-center font-inter">
            Your <span className="text-green-500">appointment request</span> has
            been successfully submitted!
          </h2>
          <p className="font-inter">
            We&apos;ll be in touch shortly to confirm.
          </p>
        </section>

        <section className="request-details">
          <p>Requested appointment details: </p>
          <div className="flex items-center gap-3">
            <Image
              src={doctor?.image!}
              alt="doctor"
              width={100}
              height={100}
              className="size-6"
            />
            <p className="whitespace-nowrap font-inter font-bold">
              Dr. {doctor?.name}
            </p>
          </div>
          <div className="flex gap-2 font-inter font-medium">
            <Image
              src="/assets/icons/calendar.svg"
              height={24}
              width={24}
              alt="calendar"
              className="invert dark:invert-0"
            />
            <p> {formatDateTime(appointment.schedule).dateTime}</p>
          </div>
        </section>
        <div className="flex flex-col items-center sm:flex-row sm:gap-4">
          <Button variant="outline" className="shad-primary-btn" asChild>
            <Link href={`/patients/${userId}/new-appointment`}>
              New Appointment <CalendarDays className="ml-2" />
            </Link>
          </Button>

          <Button
            className="border-2 border-transparent bg-slate-800 text-slate-300 hover:bg-black hover:text-white dark:hover:border-white"
            asChild
          >
            <Link href="/">
              Home Page <Home className="ml-2" />
            </Link>
          </Button>
        </div>

        <p className="copyright">© 2024 CarePluse</p>
      </div>
    </div>
  );
}
