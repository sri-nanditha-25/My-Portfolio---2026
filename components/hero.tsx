"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { RefObject } from "react";
import { ProfileSlot } from "@/components/sticky-profile-image";

export function Hero({
  startRef,
}: {
  startRef: RefObject<HTMLDivElement | null>;
}) {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 sm:pt-0">
      {/* Full-width Animated Gradient Background */}
      <div className="absolute inset-0 w-full -z-10 overflow-hidden">
        {/* Base gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-light-navy opacity-100" />
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-2 left-2 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-green/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-2 right-2 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-green/5 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      {/* Content Container - matches page padding */}
      <div className="px-6 md:px-12 lg:px-24 mx-auto max-w-7xl w-full relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12"
          >
            <div className="col-span-1 md:col-span-2 order-2 md:order-1">
              <div className="space-y-5 sm:space-y-6 md:pt-6 md:flex-1">
                <motion.h1
                  variants={itemVariants}
                  className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-lightest-slate"
                >
                  B Sri Nanditha
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="max-w-xl text-slate text-base sm:text-lg"
                >
                  Urban Development | Governance | Social Impact | Research & Program Management.
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  className="max-w-xl text-slate text-sm sm:text-lg"
                >
                  MBA candidate in Urban Management & Governance at {" "}
                  <a
                    href="https://www.xim.edu/"
                    className="text-green hover:underline"
                  >
                    XIM University
                  </a> {" "}
                  with hands-on experience in CSR programs, municipal governance, field research, stakeholder engagement and data-driven program management
                </motion.p>

                <motion.div variants={itemVariants} className="pt-4 sm:pt-6">
                  <Button
                    className="relative rounded-xl bg-green/95 text-navy shadow-[0_8px_20px_rgba(0,0,0,0.5),0_2px_6px_rgba(0,0,0,0.3),inset_0_-2px_4px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.15)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-green after:absolute after:inset-[-4px] after:-z-10 after:rounded-[0.9rem] after:border after:border-green/50 after:opacity-70 after:animate-pulse"
                    asChild
                  >
                    <a href="#about" className="group relative overflow-hidden">
                      <span className="relative z-10 flex items-center gap-2 text-lg">
                        Know about me
                        <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                          -&gt;
                        </span>
                      </span>
                      <span className="absolute inset-0 bg-green/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>

          <div className="relative mx-auto order-1 md:order-2">
            <ProfileSlot slotRef={startRef} className="mx-auto md:mx-0 mt-10" />
          </div>
          </motion.div>
      </div>
    </section>
  );
}
