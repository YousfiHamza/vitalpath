import React from "react";
import Image from "next/image";
import { LogIn, Users, CalendarPlus, Mail } from "lucide-react";

import { Timeline } from "@/components/ui/timeline";

export function HowToSection() {
  const data = [
    {
      title: "Step #1",
      content: (
        <div>
          <h3 className="mb-2 flex items-center font-inter text-2xl font-semibold text-green-700 md:text-4xl">
            <LogIn className="mr-2 size-10 md:size-12" />
            Login
          </h3>
          <p className="text-theme mb-8 text-xs font-normal md:text-base">
            Access our platform with ease — log in using either your phone
            number or email.
          </p>
          <div className="relative h-auto w-full -skew-x-2 skew-y-1 overflow-hidden rounded-xl border-2 border-slate-500 shadow-2xl shadow-black dark:shadow-slate-300 md:mb-12 md:max-w-[777px]">
            <Image
              alt="LoginPage screenshot"
              src="/assets/images/how-to/login.jpg"
              width={777}
              height={666}
              sizes="(min-width: 400px) 333, (min-width: 768px) 555, 777"
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          <p className="text-theme my-8 text-xs font-normal md:text-base">
            If you&apos;re visiting for the first time, you&apos;ll be prompted
            to create a new account for registration. Otherwise you will be
            taken directly to Step #2.
          </p>
          <h3 className="my-4 flex items-center font-inter text-2xl font-semibold text-green-700 md:text-4xl">
            <Users className="mr-2 size-10 md:size-12" />
            Register
          </h3>
          <p className="text-theme mb-8 text-xs font-normal md:text-base">
            To complete your registration, we&apos;ll need additional
            information such as your date of birth, emergency contacts, current
            medications, family medical history, allergies, and more.
          </p>
          <div className="relative h-auto w-full -skew-x-2 skew-y-1 overflow-hidden rounded-xl border-2 border-slate-500 shadow-2xl shadow-black dark:shadow-slate-300 md:mb-12 md:max-w-[777px]">
            <Image
              alt="LoginPage screenshot"
              src="/assets/images/how-to/register.jpg"
              width={777}
              height={666}
              sizes="(min-width: 400px) 333, (min-width: 768px) 555, 777"
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Step #2",
      content: (
        <div>
          <h3 className="mb-2 flex items-center font-inter text-2xl font-semibold text-green-700 md:text-4xl">
            <CalendarPlus className="mr-2 size-10 md:size-12" />
            Book Your Appointment
          </h3>
          <p className="text-theme mb-8 text-xs font-normal md:text-base">
            Booking your appointment is simple and straightforward. Just select
            your preferred doctor, choose a convenient date and time, and
            provide any relevant details about your visit, including the reason
            and any current medications you may be taking.
          </p>
          <div className="relative h-auto w-full -skew-x-2 skew-y-1 overflow-hidden rounded-xl border-2 border-slate-500 shadow-2xl shadow-black dark:shadow-slate-300 md:mb-12 md:max-w-[777px]">
            <Image
              alt="LoginPage screenshot"
              src="/assets/images/how-to/new-appointment.jpg"
              width={777}
              height={666}
              sizes="(min-width: 400px) 333, (min-width: 768px) 555, 777"
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Step #3",
      content: (
        <div>
          <h3 className="mb-2 flex items-center font-inter text-2xl font-semibold text-green-700 md:text-4xl">
            <Mail className="mr-2 size-10 md:size-12" />
            SMS Notification
          </h3>
          <p className="text-theme mb-8 text-xs font-normal md:text-base">
            Our administrative team closely monitors appointment requests,
            verifying doctor availability and assessing the urgency and
            relevance of each appointment. Based on their evaluation, your
            appointment will either be confirmed or canceled. In either case,
            you will receive an SMS notification with the decision and the
            reason behind it.
          </p>
          <div className="relative h-auto w-full -skew-x-2 skew-y-1 overflow-hidden rounded-xl border-2 border-slate-500 shadow-2xl shadow-black dark:shadow-slate-300 md:mb-12 md:max-w-[777px]">
            <Image
              alt="LoginPage screenshot"
              src="/assets/images/how-to/admin.jpg"
              width={777}
              height={666}
              sizes="(min-width: 400px) 333, (min-width: 768px) 555, 777"
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      ),
    },
  ];
  return <Timeline data={data} />;
}
