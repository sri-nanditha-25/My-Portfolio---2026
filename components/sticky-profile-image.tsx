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
}: {
  slotRef: RefObject<HTMLDivElement | null>;
  className?: string;
}) {
  return (
    <div
      ref={slotRef}
      className={`${PROFILE_SLOT_CLASS} ${className}`}
      aria-hidden
    >
      <div className="relative h-full w-full overflow-hidden rounded-xl md:hidden">
        <Image
          src="/assets/about/profile-img.png"
          alt=""
          fill
          sizes="192px"
          className="object-cover"
          quality={90}
        />
      </div>
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
      <div className="group relative h-full w-full pointer-events-auto">
        <div className="relative h-full w-full overflow-hidden rounded-xl">
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
        <div className="absolute inset-0 -z-10 hidden rounded-xl border-2 border-green translate-x-4 translate-y-4 md:block md:h-64" />
      </div>
    </motion.div>
  );
}
