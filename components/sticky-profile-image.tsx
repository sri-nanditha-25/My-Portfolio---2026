"use client";

import {
  useLayoutEffect,
  useRef,
  type RefObject,
} from "react";
import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";

export const PROFILE_SLOT_CLASS =
  "relative w-48 h-48 sm:w-60 sm:h-60 md:w-64 md:h-64 shrink-0";

export function ProfileSlot({
  slotRef,
  className = "",
  showMobileImage = true,
}: {
  slotRef: RefObject<HTMLDivElement | null>;
  className?: string;
  showMobileImage?: boolean;
}) {
  return (
    <div
      ref={slotRef}
      className={`${PROFILE_SLOT_CLASS} ${className}`}
      aria-hidden
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.5 }}
        className={`relative h-full w-full overflow-hidden rounded-[42%_58%_63%_37%/38%_44%_56%_62%] md:hidden ${showMobileImage === false ? "hidden" : ""}`}
      >
        <Image
          src="/assets/about/profile-img.png"
          alt=""
          fill
          sizes="192px"
          className="object-cover"
          quality={90}
        />
      </motion.div>
    </div>
  );
}

export function StickyProfileImage({
  startRef,
  endRef,
}: {
  startRef: RefObject<HTMLDivElement | null>;
  endRef: RefObject<HTMLDivElement | null>;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const width = useMotionValue(0);
  const height = useMotionValue(0);
  const opacity = useMotionValue(0);
  const raf = useRef(0);

  useLayoutEffect(() => {
    const update = () => {
      const startEl = startRef.current;
      const endEl = endRef.current;
      if (!startEl || !endEl) return;

      const start = startEl.getBoundingClientRect();
      const end = endEl.getBoundingClientRect();
      const stickyY = start.top + window.scrollY;
      const total = end.top + window.scrollY - stickyY;
      const t =
        total <= 0
          ? 1
          : Math.min(1, Math.max(0, 1 - (end.top - stickyY) / total));

      x.set(start.left + (end.left - start.left) * t);
      y.set(Math.min(stickyY, end.top));
      width.set(start.width + (end.width - start.width) * t);
      height.set(start.height + (end.height - start.height) * t);
      opacity.set(start.width > 0 ? 1 : 0);
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [startRef, endRef, x, y, width, height, opacity]);


  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-30 hidden will-change-transform md:block"
      style={{ x, y, width, height, opacity }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.5 }}
        className="group relative h-full w-full pointer-events-auto"
      >
        <div className="relative z-10 h-full w-full overflow-hidden rounded-[42%_58%_63%_37%/38%_44%_56%_62%]">
          <div className="absolute inset-0 z-10 bg-green/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <Image
            src="/assets/about/profile-img.png"
            alt="B Sri Nanditha - Product Engineer and Frontend Developer"
            fill
            sizes="(max-width: 640px) 192px, (max-width: 768px) 240px, 256px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
            quality={90}
          />
        </div>
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute -inset-8 z-0 hidden h-[calc(100%+4rem)] w-[calc(100%+4rem)] scale-110 fill-pink md:block"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M44.2,-71C53.1,-63.2,53.2,-43.7,49.6,-29.2C46,-14.7,38.8,-5.1,33.9,2.5C29.1,10,26.6,15.4,23.9,23.5C21.3,31.6,18.4,42.4,12.5,45.5C6.6,48.6,-2.5,44,-11.6,40.8C-20.8,37.6,-30,35.8,-37,30.5C-44,25.3,-48.6,16.5,-51.3,6.6C-54,-3.3,-54.8,-14.3,-47,-17.4C-39.3,-20.5,-23.1,-15.6,-13.8,-23.2C-4.6,-30.9,-2.3,-51,7.7,-63C17.7,-75,35.4,-78.8,44.2,-71Z"
            transform="translate(100 100)"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
