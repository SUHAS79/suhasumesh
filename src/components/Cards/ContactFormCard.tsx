"use client";

import { motion } from "framer-motion";
import { toast } from "sonner";
import { useState } from "react";
import { BsSend } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { Card } from "../ui/card";
import { selfData } from "@/constant";

const viewportConfig = { once: true, margin: "-100px" as const };

// Native <option> elements ignore the parent <select> colors in most browsers,
// so we set a solid dark background + light text explicitly on each one.
const optionStyle = { backgroundColor: "#161412", color: "#f5f5f5" } as const;

const CONTACT_REASONS = [
  { value: "General inquiries", label: "General Inquiries" },
  { value: "Project inquiries", label: "Project Inquiries" },
  { value: "Collaboration request", label: "Collaboration Request" },
  { value: "Internship/Job opportunity", label: "Internship / Job Opportunity" },
  { value: "Feedback/Question", label: "Feedback / Question" },
];

export const ContactFormCard = () => {
  const [formValues, setFormValues] = useState({
    senderName: "",
    senderEmail: "",
    reasonToContact: "General inquiries",
    senderMsg: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  // There is no backend. Rather than pretend a message was delivered, this
  // hands the composed message to the visitor's own mail client, so the
  // message really does reach the inbox.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `${formValues.reasonToContact} — ${formValues.senderName}`;
    const body = `${formValues.senderMsg}\n\n—\n${formValues.senderName}\n${formValues.senderEmail}`;

    window.location.href = `mailto:${selfData.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    toast.info("Opening your email app…", {
      description: `If nothing opens, write to ${selfData.email} directly.`,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportConfig}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group h-full"
    >
      <Card
        className="relative overflow-hidden backdrop-blur-xl border transition-all duration-300 h-full flex flex-col shadow-lg hover:shadow-xl"
        style={{
          background: "hsl(var(--card))",
          borderColor: "hsl(var(--glass-border))",
        }}
      >
        <div className="relative z-10 p-4 md:p-6 flex flex-col flex-grow">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                required
                type="text"
                placeholder="Your Name"
                name="senderName"
                onChange={handleChange}
                value={formValues.senderName}
                className="w-full px-4 py-3 text-sm rounded-xl backdrop-blur-xl border transition-all duration-200 outline-none focus:ring-2 focus:ring-primary/50 hover:border-primary/30"
                style={{
                  color: "hsl(var(--foreground))",
                  background: "hsl(var(--card))",
                  borderColor: "hsl(var(--glass-border))",
                }}
              />
              <input
                required
                type="email"
                placeholder="Your Email"
                name="senderEmail"
                onChange={handleChange}
                value={formValues.senderEmail}
                className="w-full px-4 py-3 text-sm rounded-xl backdrop-blur-xl border transition-all duration-200 outline-none focus:ring-2 focus:ring-primary/50 hover:border-primary/30"
                style={{
                  color: "hsl(var(--foreground))",
                  background: "hsl(var(--card))",
                  borderColor: "hsl(var(--glass-border))",
                }}
              />
            </div>

            <div className="relative">
              <select
                required
                name="reasonToContact"
                onChange={handleChange}
                value={formValues.reasonToContact}
                className="w-full appearance-none cursor-pointer px-4 py-3 pr-11 text-sm rounded-xl backdrop-blur-xl border transition-all duration-200 outline-none focus:ring-2 focus:ring-primary/50 hover:border-primary/30"
                style={{
                  color: "hsl(var(--foreground))",
                  background: "hsl(var(--card))",
                  borderColor: "hsl(var(--glass-border))",
                }}
              >
                {CONTACT_REASONS.map((r) => (
                  <option key={r.value} value={r.value} style={optionStyle}>
                    {r.label}
                  </option>
                ))}
              </select>
              <FiChevronDown
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4"
                style={{ color: "hsl(var(--primary))" }}
              />
            </div>

            <textarea
              placeholder="Your Message"
              rows={4}
              name="senderMsg"
              onChange={handleChange}
              value={formValues.senderMsg}
              required
              className="w-full px-4 py-3 text-sm rounded-xl backdrop-blur-xl border transition-all duration-200 outline-none focus:ring-2 focus:ring-primary/50 hover:border-primary/30 resize-none"
              style={{
                color: "hsl(var(--foreground))",
                background: "hsl(var(--glass-bg))",
                borderColor: "hsl(var(--glass-border))",
              }}
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="w-full btn-primary px-6 py-3 rounded-xl font-medium text-base flex items-center justify-center gap-2"
            >
              <BsSend className="w-5 h-5" />
              Compose Email
            </motion.button>

            <p
              className="text-xs text-center"
              style={{ color: "hsl(var(--foreground) / 0.55)" }}
            >
              This opens your own email app with the message ready to send. You
              can also write to{" "}
              <a
                href={`mailto:${selfData.email}`}
                className="underline underline-offset-2"
                style={{ color: "hsl(var(--primary))" }}
              >
                {selfData.email}
              </a>
              .
            </p>
          </form>
        </div>
      </Card>
    </motion.div>
  );
};
