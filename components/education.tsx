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
    date: "Expected 2027",
    image: "/assets/education/xim-campus.jpg",
    imageAlt: "XIM University campus in Bhubaneswar",
  },
  {
    status: "Completed",
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

      <motion.div
        className="mb-7 sm:mb-8"
        initial={{ opacity: 0, y: 18 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
        transition={{ duration: 0.45, delay: 0.12 }}
      >
        <h3 className="text-2xl font-semibold text-darkest-slate sm:text-3xl">
          Academic Journey.
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
          Building a foundation in technology, management and organisational understanding.
        </p>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-2 md:gap-6">
        {education.map((item, index) => (
          <motion.article
            key={item.degree}
            className="overflow-hidden rounded-lg border border-lightest-navy bg-light-navy/30"
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.45, delay: 0.2 + index * 0.12 }}
          >
            <div className="relative aspect-[16/7] overflow-hidden">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-2.5 p-5 sm:p-6">
              <span className="w-fit rounded-full border border-green/25 bg-green/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-green">
                {item.status}
              </span>
              <div>
                <h4 className="text-lg font-medium leading-snug text-lightest-slate sm:text-xl">
                  {item.degree}
                </h4>
                <p className="mt-1 text-sm text-green sm:text-base">{item.focus}</p>
              </div>
              <div className="mt-1 flex items-end justify-between gap-3 border-t border-lightest-navy pt-3">
                <p className="text-sm text-light-slate sm:text-base">{item.institution}</p>
                <span className="shrink-0 font-mono text-xs text-light-slate sm:text-sm">
                  {item.date}
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
