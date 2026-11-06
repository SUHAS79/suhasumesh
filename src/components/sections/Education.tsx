"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { nasalization } from "@/app/fonts";
import { educationData, credentialsData } from "@/constant";
import { LuFileCheck, LuAward } from "react-icons/lu";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/** Small link that opens a certificate PDF in a new tab. */
const CertificateLink = ({ href }: { href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 mt-3 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-200"
    style={{
      background: "hsl(var(--primary) / 0.08)",
      border: "1px solid hsl(var(--primary) / 0.28)",
      color: "hsl(var(--primary))",
    }}
  >
    <LuFileCheck className="w-3.5 h-3.5" aria-hidden="true" />
    View certificate
  </a>
);

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="education"
      className="py-24 max-w-6xl mx-auto relative overflow-hidden"
    >
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            className={`${nasalization.className} text-4xl md:text-5xl font-bold text-primary`}
            variants={itemVariants}
          >
            Education
          </motion.h2>
          <motion.p
            className="text-xs text-muted-foreground max-w-2xl mx-auto mt-4"
            variants={itemVariants}
          >
            Academic record with certificates attached for verification
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {educationData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-card rounded-xl px-5 py-5 sm:px-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-6">
                {/* Left: what and where */}
                <div className="min-w-0 flex-1">
                  <h3
                    className="text-base font-semibold leading-snug"
                    style={{ color: "hsl(var(--foreground))" }}
                  >
                    {item.degree}
                  </h3>

                  {item.field && (
                    <p
                      className="text-sm mt-0.5"
                      style={{ color: "hsl(var(--foreground) / 0.62)" }}
                    >
                      {item.field}
                    </p>
                  )}

                  <p
                    className="text-sm mt-1.5"
                    style={{ color: "hsl(var(--foreground) / 0.78)" }}
                  >
                    {item.institution}
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "hsl(var(--muted-foreground))" }}
                  >
                    {item.board} · {item.location}
                  </p>

                  {item.certificate && (
                    <CertificateLink href={item.certificate} />
                  )}
                </div>

                {/* Right: when and how well */}
                <div className="flex-shrink-0 sm:text-right">
                  <p
                    className="text-xs font-medium whitespace-nowrap"
                    style={{ color: "hsl(var(--primary))" }}
                  >
                    {item.year}
                  </p>

                  <p
                    className="text-sm mt-1.5"
                    style={{ color: "hsl(var(--foreground) / 0.8)" }}
                  >
                    {item.grade}
                  </p>

                  {item.germanGrade && (
                    <p
                      className="text-xs mt-1"
                      style={{ color: "hsl(var(--muted-foreground))" }}
                    >
                      German scale:{" "}
                      <span
                        className="font-semibold"
                        style={{ color: "hsl(var(--foreground) / 0.9)" }}
                      >
                        {item.germanGrade}
                      </span>
                      {!item.germanGradeOfficial && "*"}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Additional credentials */}
          {credentialsData.map((item, idx) => (
            <motion.div
              key={`cred-${idx}`}
              variants={itemVariants}
              className="glass-card rounded-xl px-5 py-5 sm:px-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-6">
                <div className="min-w-0 flex-1">
                  <h3
                    className="text-base font-semibold leading-snug flex items-center gap-2"
                    style={{ color: "hsl(var(--foreground))" }}
                  >
                    <LuAward
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: "hsl(var(--primary))" }}
                      aria-hidden="true"
                    />
                    {item.title}
                  </h3>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "hsl(var(--muted-foreground))" }}
                  >
                    {item.issuer}
                  </p>
                  <p
                    className="text-sm mt-2 leading-relaxed"
                    style={{ color: "hsl(var(--foreground) / 0.65)" }}
                  >
                    {item.description}
                  </p>
                  <CertificateLink href={item.certificate} />
                </div>

                <div className="flex-shrink-0 sm:text-right">
                  <p
                    className="text-xs font-medium whitespace-nowrap"
                    style={{ color: "hsl(var(--primary))" }}
                  >
                    {item.year}
                  </p>
                  <p
                    className="text-sm mt-1.5"
                    style={{ color: "hsl(var(--foreground) / 0.8)" }}
                  >
                    {item.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footnote on how the German grades were arrived at */}
        <motion.p
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-[0.7rem] leading-relaxed mt-6 px-1"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          The Bachelor&apos;s grade of 2.1 is the official German conversion.
          <br className="hidden sm:block" />
          <span>*</span> School grades converted with the modified Bavarian
          formula and shown as a guide, not as an official conversion.
        </motion.p>
      </div>
    </section>
  );
}
