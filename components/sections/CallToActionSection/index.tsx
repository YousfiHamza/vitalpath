"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { CalendarArrowDown } from "lucide-react";
import { motion, useInView } from "framer-motion";

export function CallToActionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.section
      id="callToAction"
      className="text-theme relative mt-6 flex flex-col items-center py-12 text-center font-medium md:mt-12"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="glow absolute -z-10 aspect-square w-full max-w-sm rounded-full bg-green-500/50 blur-[160px] filter"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
      />

      <motion.div
        className="glass-container w-fit rounded-xl bg-gradient-to-b from-slate-400 to-slate-800 p-1 md:rounded-2xl"
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <Image
          src="/assets/icons/logo-icon.svg"
          alt="logo"
          width={75}
          height={75}
        />
      </motion.div>

      <motion.div
        className="mb-4 mt-2 max-w-xl text-balance text-4xl"
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      >
        Your Path to Wellness Begins Here — <b>Secure Your Spot Today!</b>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
      >
        <Link
          href="/login"
          className="relative inline-flex overflow-hidden rounded-lg p-[3px]"
        >
          <span className="absolute inset-[-1000%] hidden animate-none bg-[conic-gradient(from_90deg_at_50%_50%,#d1ffdb_0%,#39b25f_50%,#cbffdc_100%)] lg:block lg:animate-[spin_2s_linear_infinite]" />
          <span className="inline-flex h-full w-full items-center justify-around rounded bg-green-700 px-6 py-[10px] text-base text-slate-100 backdrop-blur-2xl hover:bg-green-500 md:px-8 md:py-[14px]">
            Book Now
            <CalendarArrowDown className="ml-3" />
          </span>
        </Link>
      </motion.div>
    </motion.section>
  );
}
