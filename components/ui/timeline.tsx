"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import LightBulbe from "@/public/assets/icons/bulbe.svg";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section
      className="w-full overflow-hidden bg-transparent font-sans md:my-10 md:px-10"
      ref={containerRef}
      id="how-it-works"
    >
      <div className="mx-auto max-w-7xl px-5 pt-20">
        <h2 className="mb-3 flex items-center font-inter text-3xl font-bold tracking-tight text-yellow-600 dark:text-yellow-500 md:mb-6 md:text-5xl lg:text-6xl">
          <div className="h-10 w-10 md:h-14 md:w-14 lg:h-16 lg:w-16">
            <LightBulbe className="w- h-full" />
          </div>
          How It Works
        </h2>
        <p className="text-theme max-w-2xl text-base leading-relaxed md:text-lg lg:text-xl">
          In just{" "}
          <b className="text-lg dark:text-white md:text-xl lg:text-2xl">
            3 straightforward steps
          </b>
          , explore how to effortlessly manage your health and wellness with
          VitalPath. From scheduling appointments to receiving personalized care
          updates, our intuitive process ensures you stay in control every step
          of the way. Let VitalPath guide you through a seamless healthcare
          experience, designed to make your journey to better health as smooth
          and stress-free as possible.
        </p>
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:gap-10 md:pt-20"
          >
            <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start lg:w-full lg:flex-row">
              <div className="bg-theme absolute -left-3 flex h-10 w-10 items-center justify-center rounded-full md:left-3 lg:left-3">
                <div className="h-4 w-4 rounded-full border border-neutral-300 bg-slate-500 p-2 dark:border-neutral-700 dark:bg-slate-400" />
              </div>
              <h3 className="hidden text-xl font-bold text-slate-500 dark:text-slate-400 lg:block lg:pl-20 lg:text-5xl">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pl-7 pr-4 sm:pl-10 md:pl-4">
              <h3 className="mb-4 block text-left text-2xl font-bold text-neutral-500 dark:text-neutral-500 lg:hidden">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-2 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] dark:via-neutral-700 md:left-8"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-green-500 from-[0%] via-green-400 via-[10%] to-transparent"
          />
        </div>
      </div>
    </section>
  );
};
