import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

interface ExperienceCardProps {
  role: string;
  year: string;
  description: string[];
  company: string;
  technologies: string[];
  index?: number;
}

export const ExperienceCard: FC<ExperienceCardProps> = ({
  role,
  year,
  description,
  company,
  technologies,
  index = 0,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      whileHover={{ scale: 1.01, y: -4, transition: { duration: 0.2 } }}
      className="relative flex items-start space-x-8 group"
    >
      {/* Timeline dot */}
      <div className="mt-6 flex-shrink-0">
        <div className="w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full border-2 border-background shadow-lg" />
        <div className="w-px h-20 bg-gradient-to-b from-primary/50 to-transparent mx-auto mt-2" />
      </div>

      {/* Content */}
      <div className="flex-1">
        <Card
          className="relative overflow-hidden backdrop-blur-xl border transition-all duration-300 shadow-lg hover:shadow-xl"
          style={{
            background: "hsl(var(--glass-bg))",
            borderColor: "hsl(var(--glass-border))",
          }}
        >
          <div className="relative z-10 p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div>
                <h3
                  className="text-xl font-semibold font-nasalization mb-1"
                  style={{ color: "hsl(var(--primary))" }}
                >
                  {role}
                </h3>
                <p className="font-medium" style={{ color: "hsl(var(--secondary))" }}>
                  {company}
                </p>
              </div>
              <span
                className="text-sm mt-2 sm:mt-0"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                {year}
              </span>
            </div>

            <ul className="space-y-2">
              {description.map((point, i) => (
                <li
                  key={i}
                  className="text-sm font-inter flex items-start"
                  style={{ color: "hsl(var(--foreground) / 0.8)" }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0"
                    style={{ backgroundColor: "hsl(var(--accent))" }}
                  />
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-6">
              {technologies.map((tech, i) => (
                <Badge
                  key={i}
                  variant="outline"
                  className="text-sm font-mono px-3 py-1 hover:bg-primary/10 transition-colors duration-200"
                  style={{
                    borderColor: "hsl(var(--primary) / 0.3)",
                    color: "hsl(var(--foreground) / 0.9)",
                    backgroundColor: "hsl(var(--primary) / 0.1)",
                    borderRadius: "0.5rem",
                  }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </motion.div>
  );
};
