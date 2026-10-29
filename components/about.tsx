"use client";

import { useRef, type RefObject } from "react";
import { motion, useInView } from "framer-motion";
import { ProfileSlot } from "@/components/sticky-profile-image";

const skills = [
  "Urban Governance",
  "CSR & Social Impact",
  "Field Research",
  "Stakeholder Engagement",
  "Program Management",
  "Data Analysis & Excel",
  "Power BI",
  "GIS & Spatial Analysis",
];

export function About({
  endRef,
}: {
  endRef: RefObject<HTMLDivElement | null>;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-16 sm:py-24">
      <motion.h2
        className="numbered-heading text-xl sm:text-2xl font-bold mb-10 sm:mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <span className="mr-2 font-mono text-green">01.</span> About Me
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
        <motion.div
          className="col-span-1 md:col-span-2 order-2 md:order-1"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="space-y-4 sm:space-y-5 text-slate text-base sm:text-lg">
            <p>
            With a background in Electronics & Communication Engineering and currently pursuing an MBA in Urban Management & Governance at XIM University, I have developed a strong interest in understanding how cities, communities, institutions and programs work together to create meaningful outcomes
            </p>
            <p>
            My experience with{" "}
              <a href="https://www.linkedin.com/company/zekoai/" className="link">
              Tata Steel Foundation
              </a>{" "}
              gave me hands-on exposure to CSR and social-impact programs, 
              where I worked on large-scale applicant evaluation, conducted 100+ interviews, managed 600+ records and
              supported participant profiling for the Tribal Leadership Programme. I also worked with Raipur Municipal 
              Corporation, gaining practical exposure to municipal service delivery, sanitation, waste management,
              livelihood initiatives and ward-level governance.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul className="grid grid-cols-2 gap-2 mt-4">
              {skills?.map((skill, i) => (
                <motion.li
                  key={i}
                  className="flex items-center font-mono text-xs sm:text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                  }
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                >
                  <span className="text-green mr-2">▹</span> {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto order-1 hidden md:block md:order-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ProfileSlot slotRef={endRef} className="mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
