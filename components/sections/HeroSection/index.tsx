"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CalendarArrowDown, PlayIcon } from "lucide-react";

import Waves from "@/public/assets/icons/waves.svg";

export default function HeroSection() {
  return (
    <div className="text-theme -mx-4 flex flex-wrap items-center">
      <div id="content" className="w-full px-3 lg:w-1/2">
        <div className="mx-auto mb-6 max-w-[530px] text-center sm:mb-10 lg:mb-0 lg:ml-0 lg:text-left">
          <motion.span
            initial={{ y: -500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", stiffness: 60, duration: 0.5 }}
            className="my-4 inline-block rounded-full bg-green-700 bg-opacity-25 px-5 py-[10px] text-base dark:bg-opacity-50 lg:my-8"
          >
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500"></span>
            Availablity: 24 / 7
          </motion.span>
          <motion.h1
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "just", stiffness: 60, duration: 0.75 }}
            className="mb-5 font-inter text-2xl font-medium sm:text-4xl lg:text-6xl lg:leading-[60px]"
          >
            <span className="text-4xl font-bold text-green-700 lg:text-7xl">
              CarePulse
            </span>
            <br />
            Driving the Future of Healthcare Management
          </motion.h1>
          <motion.p
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "just", stiffness: 60, duration: 0.75 }}
            className="mb-6 font-inter text-base italic lg:mb-12"
          >
            Your health, your way. With{" "}
            <span className="text-lg font-semibold text-green-700 lg:text-xl">
              CarePulse
            </span>
            , you can schedule appointments, receive personalized care updates,
            and track your progress anytime, anywhere. Experience healthcare
            that&apos;s as proactive as you are.
          </motion.p>
          <motion.div
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 60, duration: 1 }}
            className="flex flex-wrap items-center justify-center lg:justify-start"
          >
            <Link
              href="/login"
              className="inline-flex items-center rounded bg-green-500 px-6 py-[10px] text-base text-white hover:bg-opacity-75 md:px-8 md:py-[14px]"
            >
              Book an Appointment
              <CalendarArrowDown className="ml-2" />
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex items-center rounded px-8 py-[14px] text-base hover:underline"
            >
              <PlayIcon className="mr-2" />
              How it Works
            </Link>
          </motion.div>
        </div>
      </div>
      <motion.div id="images" className="w-full px-4 lg:w-1/2">
        <div className="relative -z-20 mx-auto h-[333px] w-[300px] max-w-[700px] sm:h-[444px] sm:w-[444px] lg:ml-0 lg:h-[560px] lg:w-full">
          <motion.div
            initial={{ x: 2000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 60, duration: 1 }}
            className="absolute right-5 top-10 hidden lg:block lg:w-3/4"
          >
            <Image
              alt="hero-image"
              loading="lazy"
              width="666"
              height="520"
              style={{ color: "transparent", objectFit: "contain" }}
              src="/assets/images/doctors-office.jpg"
              sizes="(min-width: 400px) 444px, (min-width: 768px) 555px, 666px"
              className="rounded-xl"
            />
          </motion.div>
          <motion.div
            initial={{ x: 3000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 60, duration: 3 }}
            className="absolute bottom-0 z-10 flex h-full w-full items-center justify-center lg:left-0 lg:h-[333px] lg:w-[333px]"
          >
            <Image
              alt="hero-image"
              loading="lazy"
              width="555"
              height="555"
              style={{ color: "transparent" }}
              src="/assets/images/onboarding-img.png"
              sizes="(min-width: 400px) 333px, (min-width: 768px) 444px, 555px"
              className="h-full w-full rounded-lg"
            />
            <div className="absolute -right-3 -top-3 -z-10 h-full w-full rounded-lg border border-opacity-10 bg-blue-700 bg-opacity-5 backdrop-blur-[6px] dark:border-white dark:border-opacity-10 dark:bg-white dark:bg-opacity-10 md:-right-6 md:-top-6"></div>
          </motion.div>
          <motion.div
            initial={{ x: 2500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 60, duration: 2 }}
            className="absolute -bottom-6 -left-6 hidden lg:block"
          >
            <Waves />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
