"use client";

import { motion } from "framer-motion";
import React, { FC } from "react";
import { nasalization } from "@/app/fonts";
import { skillsData } from "@/constant";
import { SkillCard } from "@/components/Cards";

interface LogoProps {
  title: string;
  logoComponent: React.FC;
  color: string;
}

interface SkillsDataProps {
  title: string;
  data: LogoProps[];
}

interface MarqueeProps {
  skills: LogoProps[];
  direction: "left" | "right";
}

const Marquee: FC<MarqueeProps> = ({ skills, direction }) => {
  const tripled = [...skills, ...skills, ...skills];

  return (
    <div className="my-2">
      <div className="relative overflow-hidden py-2">
        <div
          className={direction === "left" ? "marquee-infinite" : "marquee-reverse"}
          style={{ display: "flex", gap: "2rem" }}
        >
          {tripled.map((skill, index) => (
            <SkillCard
              key={`${skill.title}-${index}`}
              title={skill.title}
              color={skill.color || "#ffffff"}
              Icon={skill.logoComponent}
              className="lg:pr-16 md:pr-8 sm:pr-4 pr-2 flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="py-16 overflow-hidden relative">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-8">
          <motion.h2
            className={`${nasalization.className} text-4xl font-bold text-primary`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
            viewport={{ once: true, margin: "-100px" }}
          >
            My Skills
          </motion.h2>
        </div>

        {(skillsData as SkillsDataProps[]).map((category, index) => {
          const direction: "left" | "right" = index % 2 === 0 ? "left" : "right";
          return (
            <Marquee key={category.title} skills={category.data} direction={direction} />
          );
        })}
      </div>
    </section>
  );
};
