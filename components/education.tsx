"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const education = [
  {
    status: "Currently pursuing",
    degree: "Master of Business Administration (MBA)",
    focus: "Urban Management & Governance",
    institution: "XIM University, Bhubaneswar",
    date: "2027",
    image: "/assets/education/xim-campus.jpg",
    imageAlt: "XIM University campus in Bhubaneswar",
  },
  {
    degree: "Bachelor of Technology (B.Tech)",
    focus: "Electronics & Communication Engineering",
    institution: "Vignan's Institute of Engineering for Women",
    date: "2023",
    image: "/assets/education/vignan-campus.jpg",
    imageAlt: "Vignan's Institute of Engineering for Women campus in Visakhapatnam",
  },
];

export function Education() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" ref={ref} className="py-16 sm:py-20">
      <motion.h2
        className="numbered-heading mb-8 text-xl font-bold sm:mb-10 sm:text-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <span className="mr-2 font-mono text-green">04.</span> Education
      </motion.h2>

      <motion.div className="overflow-hidden rounded-xl border border-lightest-navy bg-light-navy/20 divide-y divide-lightest-navy/60">
        {education.map((item, index) => (
          <motion.article
            key={item.degree}
            className="flex items-center gap-4 p-4 sm:gap-6 sm:p-5"
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.45, delay: 0.2 + index * 0.12 }}
          >
            <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-2xl sm:h-32 sm:w-40 md:h-36 md:w-48">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 639px) 112px, (max-width: 767px) 160px, 192px"
                className="object-cover"
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-1.5 text-slate sm:gap-2">
              {item.status === "Currently pursuing" && (
                <span className="w-fit rounded-full border border-green/25 bg-green/10 px-2.5 py-1 font-sans text-xs uppercase tracking-wide text-green">
                  {item.status}
                </span>
              )}
              <h4 className="text-base font-semibold leading-snug text-darkest-slate sm:text-lg">
                {item.degree}
              </h4>
              <p className="text-base sm:text-lg">{item.focus}</p>
              <p className="text-base sm:text-lg">{item.institution}</p>
              <span className="text-base sm:text-lg">{item.date}</span>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
