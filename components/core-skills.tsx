"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ClipboardList,
  Search,
  UsersRound,
  Settings2,
  Laptop,
  Megaphone,
} from "lucide-react";

const skillGroups = [
  {
    title: "Project Management",
    icon: ClipboardList,
    skills: ["Project Coordination", "Programme Tracking", "Execution Support", "Documentation"],
  },
  {
    title: "Research & Analysis",
    icon: Search,
    skills: ["Research & Analysis", "Primary Research", "Structured Interviews", "Survey Research", "Data Interpretation"],
  },
  {
    title: "People & Stakeholders",
    icon: UsersRound,
    skills: ["Stakeholder Engagement", "Communication", "Team Collaboration", "Interview Coordination"],
  },
  {
    title: "Operations & Management",
    icon: Settings2,
    skills: ["Process Documentation", "Data Management", "Operational Assessment", "Reporting"],
  },
  {
    title: "Digital & Technical Tools",
    icon: Laptop,
    skills: ["Microsoft Excel", "PowerPoint", "Power BI", "GIS"],
  },
  {
    title: "Communication & Creative Skills",
    icon: Megaphone,
    skills: ["Social Media Management", "Content Coordination", "Visual Communication", "Videography"],
  },
];

export function CoreSkills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="core-skills" ref={ref} className="py-16 sm:py-24">
      <motion.h2
        className="numbered-heading mb-10 text-xl font-bold sm:mb-16 sm:text-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <span className="mr-2 font-mono text-green">02. Core Competencies</span>
      </motion.h2>

      <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-10">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <motion.article
              key={group.title}
              className="border-t border-lightest-navy pt-5"
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              transition={{ duration: 0.45, delay: 0.2 + index * 0.08 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <Icon aria-hidden="true" className="size-[18px] shrink-0 text-green" strokeWidth={1.7} />
                <h4 className="text-lg font-medium text-lightest-slate sm:text-xl">
                  {group.title}
                </h4>
              </div>
              <ul className="grid grid-cols-1 gap-x-5 gap-y-2 pl-[30px] text-sm text-light-slate sm:grid-cols-2 sm:text-base">
                {group.skills.map((skill) => (
                  <li key={skill} className="leading-relaxed">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
