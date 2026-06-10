"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { nasalization } from "@/app/fonts";
import { selfData } from "@/constant";
import Link from "next/link";
import Image from "next/image";
import { LuMapPinned, LuActivity, LuUsers, LuAward } from "react-icons/lu";

const pillars = [
  {
    icon: LuActivity,
    title: "Agile Frameworks in Action",
    body: "Experienced in managing Jira workflows, tracking sprint velocity, and facilitating cross-team communication to prevent milestone overruns.",
  },
  {
    icon: LuUsers,
    title: "Proven Leadership",
    body: "Led a 4-person team from initial project requirements to presenting our first-author research paper at an international IEEE conference.",
  },
  {
    icon: LuAward,
    title: "Certified Expertise",
    body: "Backed by professional certifications from Google (Project Management) and IBM (Scrum Master).",
  },
] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 max-w-6xl mx-auto relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 overflow-x-hidden">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Avatar Column — sticky on desktop so it tracks the longer content column */}
          <motion.div
            className="flex justify-center md:justify-start md:sticky md:top-24 self-start"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div
                className="h-[480px] aspect-[977/1610] rounded-2xl overflow-hidden relative border-2"
                style={{ borderColor: "hsl(var(--glass-border))" }}
              >
                <Image
                  src="/profile.png"
                  alt={selfData.name}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Section heading */}
            <motion.div variants={itemVariants}>
              <h2
                className={`${nasalization.className} text-4xl md:text-5xl font-bold`}
                style={{ color: "hsl(var(--primary))" }}
              >
                About Me
              </h2>
            </motion.div>

            {/* Intro paragraph — left-accent pull-quote card */}
            <motion.div
              className="rounded-xl px-5 py-4 relative overflow-hidden"
              style={{
                background: "hsl(var(--primary) / 0.05)",
                border: "1px solid hsl(var(--primary) / 0.14)",
                borderLeftWidth: "3px",
                borderLeftColor: "hsl(var(--primary) / 0.7)",
              }}
              variants={itemVariants}
            >
              <p
                className="text-[0.9375rem] leading-relaxed"
                style={{ color: "hsl(var(--foreground) / 0.88)" }}
              >
                I am a tech-fluent Project Coordinator and Scrum Master with a
                B.E. in Computer Science. I bridge the gap between technical
                engineering teams and project delivery goals.
              </p>
            </motion.div>

            {/* Pillar cards */}
            <motion.div className="space-y-3" variants={itemVariants}>
              <p
                className={`${nasalization.className} text-[0.65rem] font-semibold tracking-widest uppercase mb-4`}
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                What I bring to the table
              </p>

              {pillars.map(({ icon: Icon, title, body }, idx) => (
                <motion.div
                  key={idx}
                  className="glass-card glass-shimmer relative rounded-xl px-5 py-4 flex gap-4 items-start overflow-hidden cursor-default"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Icon badge */}
                  <div
                    className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{
                      background: "hsl(var(--primary) / 0.12)",
                      border: "1px solid hsl(var(--primary) / 0.28)",
                    }}
                  >
                    <Icon
                      className="w-[18px] h-[18px]"
                      style={{ color: "hsl(var(--primary))" }}
                    />
                  </div>

                  {/* Text */}
                  <div className="space-y-1 relative z-10">
                    <p
                      className="text-sm font-semibold leading-snug"
                      style={{ color: "hsl(var(--foreground))" }}
                    >
                      {title}
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "hsl(var(--foreground) / 0.62)" }}
                    >
                      {body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Closing — body card + isolated CTA line */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <div
                className="rounded-xl px-5 py-4"
                style={{
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                }}
              >
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "hsl(var(--foreground) / 0.7)" }}
                >
                  I thrive in fast-paced tech environments, focusing on backlog
                  grooming, risk tracking, and keeping cross-functional teams
                  highly efficient. Whether leading developer sprints or drawing
                  on my background in competitive team leadership, my focus is
                  always on execution.
                </p>
              </div>

              {/* Signature CTA line */}
              <div className="flex items-center gap-3 pl-1">
                <div
                  className="w-6 h-px flex-shrink-0"
                  style={{ background: "hsl(var(--primary) / 0.55)" }}
                />
                <p
                  className="text-base font-semibold"
                  style={{
                    color: "hsl(var(--primary))",
                    textShadow: "var(--text-glow)",
                  }}
                >
                  Let&apos;s build something organized.
                </p>
              </div>
            </motion.div>

            {/* Location link */}
            <motion.div variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="inline-block"
              >
                <Link
                  href={`https://www.google.com/maps/place/${selfData.current_location.city}+${selfData.current_location.state}+${selfData.current_location.country}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 rounded-full border border-primary/20 hover:border-primary/50 group transition-all duration-300"
                >
                  <LuMapPinned
                    className="w-4 h-4 group-hover:scale-110 transition-transform"
                    style={{ color: "hsl(var(--primary))" }}
                  />
                  <span style={{ color: "hsl(var(--foreground))" }}>
                    {selfData.current_location.city},{" "}
                    {selfData.current_location.state}
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
