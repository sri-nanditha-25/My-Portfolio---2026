"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronRight } from "lucide-react";
import Link from "next/link";
const jobs = [
  {
    company: "Tata Steel Foundation",
  
    url: "",
  
    title: "CSR Intern - Tribal Leadership Programme",
  
    range: "Apr 2026 - Jun 2026",
  
    duties: [
      "Supported the participant selection process for the Tribal Leadership Programme (TLP) under the SAMVAAD Ecosystem, working on leadership identification, assessment, shortlisting, and participant profiling.",
  
      "Reviewed and evaluated nearly 600 applications and contributed to shortlisting 138 participants based on leadership potential, community contribution, aspirations, social impact, and interview performance.",
  
      "Conducted 100+ structured interviews with applicants from different states across India, assessing their leadership journeys, community work, achievements, aspirations, and social impact.",
  
      "Applied the AIR evaluation framework and impact-based assessment approach to systematically evaluate applicants beyond academic or professional achievements.",
  
      "Managed and validated 600+ participant records using Microsoft Excel, including interview schedules, evaluation status, regional categorisation, shortlisting updates, and summary reporting.",
  
      "Prepared detailed profiles for shortlisted participants covering their background, achievements, leadership journey, and community contribution, along with presentation decks for programme review sessions.",
  
      "Supported programme documentation, reporting, coordination, and cross-team communication while working within the wider SAMVAAD social-impact ecosystem."
    ],
  
    tech: [
      "CSR",
      "Social Impact",
      "Program Management",
      "Candidate Assessment",
      "Structured Interviews",
      "AIR Framework",
      "Impact Assessment",
      "Microsoft Excel",
      "Data Management",
      "Participant Profiling",
      "Stakeholder Engagement",
      "Documentation",
      "PowerPoint",
      "Program Coordination"
    ]
  },
  {
    company: "Raipur Municipal Corporation",
  
    url: "",
  
    title: "Urban Governance & Municipal Operations Intern",
  
    range: "Nov 2025 - Jan 2026",
  
    duties: [
      "Participated in an Urban Management Municipal Immersion focused on understanding the functioning of urban governance, municipal administration, infrastructure, and public-service delivery in Raipur.",
  
      "Conducted field observations and interacted with municipal stakeholders to understand how essential civic services such as water supply, sanitation, solid waste management, sewage treatment, and urban infrastructure are planned and operated.",
  
      "Contributed to a primary survey of 104 college students to assess awareness of municipal functions, satisfaction with civic services, sanitation concerns, and expectations from Raipur Municipal Corporation.",
  
      "Studied solid waste management, sewage treatment, and water filtration and distribution systems through field visits, documenting operational processes, service-delivery challenges, and environmental considerations.",
  
      "Examined NULM-supported Self Help Groups and livelihood initiatives to understand how municipal and government support translates into community-level social and economic outcomes.",
  
      "Analysed urban development factors including demographics, land use, connectivity, infrastructure, municipal governance, and service-delivery challenges to develop practical observations and recommendations.",
  
      "Studied public transport infrastructure and operations through the Raipur ISBT visit, gaining exposure to terminal planning, passenger facilities, traffic management, and the role of transport infrastructure in urban development."
    ],
  
    tech: [
      "Urban Governance",
      "Municipal Operations",
      "Field Research",
      "Primary Research",
      "Stakeholder Engagement",
      "Urban Infrastructure",
      "Public Service Delivery",
      "Survey Research",
      "Data Analysis",
      "Solid Waste Management",
      "Water & Sanitation",
      "NULM",
      "Livelihood Programs",
      "Urban Mobility",
      "Report Writing"
    ]
  }
];

export function Experience() {
  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState<number | null>(null);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (tabFocus !== null) {
      tabsRef.current[tabFocus]?.focus();
    }
  }, [tabFocus]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (
      e.key === "ArrowUp" ||
      e.key === "ArrowDown" ||
      e.key === "ArrowLeft" ||
      e.key === "ArrowRight"
    ) {
      e.preventDefault();

      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        setTabFocus((prev) =>
          prev === null || prev === 0 ? (jobs?.length ?? 1) - 1 : prev - 1
        );
      } else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        setTabFocus((prev) =>
          prev === null || prev === (jobs?.length ?? 0) - 1 ? 0 : prev + 1
        );
      }
    }
  };

  return (
    <section id="experience" ref={ref} className="py-16 sm:py-24">
      <motion.h2
        className="numbered-heading text-xl sm:text-2xl font-bold mb-10 sm:mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <span className="mr-2 font-mono text-green">02. Experience</span> 
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-6 sm:gap-8 max-w-4xl mx-auto">
        <motion.div
          className="relative mb-6 md:mb-0 md:w-max"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          role="tablist"
          aria-label="Job tabs"
          onKeyDown={onKeyDown}
        >
          <div className="flex flex-col min-w-full w-full">
            {jobs?.map((job, i) => (
              <button
                key={i}
                ref={(el) => {
                  if (el) {
                    tabsRef.current[i] = el;
                  }
                }}
                className={`w-full text-left px-4 sm:px-5 py-2 sm:py-3 font-mono text-xs sm:text-sm whitespace-nowrap focus-ring rounded transition-all duration-300 ${
                  activeTabId === i
                    ? "text-green bg-light-navy/50 relative"
                    : "text-slate hover:text-green hover:bg-light-navy/30"
                }`}
                onClick={() => setActiveTabId(i)}
                onFocus={() => setTabFocus(i)}
                id={`tab-${i}`}
                role="tab"
                tabIndex={activeTabId === i ? 0 : -1}
                aria-selected={activeTabId === i}
                aria-controls={`panel-${i}`}
              >
                {job.company}
                {activeTabId === i && (
                  <motion.span
                    className="absolute left-0 top-0 bottom-0 w-0.5 bg-green rounded-full"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="relative flex-1 min-h-[300px] sm:min-h-[550px]">
          <AnimatePresence mode="wait">
            {jobs?.map(
              (job, i) =>
                activeTabId === i && (
                  <motion.div
                    key={i}
                    className="space-y-4 sm:space-y-6 relative w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    id={`panel-${i}`}
                    role="tabpanel"
                    aria-labelledby={`tab-${i}`}
                    tabIndex={0}
                  >
                    <h3 className="text-lg sm:text-xl font-medium text-lightest-slate">
                      <span>{job?.title}</span>{" "}
                      <span className="text-green">
                        @{" "}
                        <Link
                          href={job?.url || "#"}
                          className="link inline-flex items-center group"
                          target="_blank"
                        >
                          {job?.company}
                          <ExternalLink
                            size={16}
                            className="ml-1 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                          />
                        </Link>
                      </span>
                    </h3>

                    <p className="font-mono text-xs sm:text-sm text-light-slate">
                      {job?.range}
                    </p>

                    <ul className="space-y-3">
                      {job?.duties?.map((duty, j) => (
                        <motion.li
                          key={j}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 + j * 0.1 }}
                        >
                          <ChevronRight
                            size={18}
                            className="text-green shrink-0 mt-1 mr-2"
                          />
                          <span className="text-light-slate text-sm sm:text-base">
                            {duty}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {job?.tech?.map((tech, j) => (
                        <motion.span
                          key={j}
                          className="px-2 sm:px-3 py-1 rounded-full bg-light-navy text-green text-xs font-mono border border-green/20 shadow-sm"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: 0.3 + j * 0.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
