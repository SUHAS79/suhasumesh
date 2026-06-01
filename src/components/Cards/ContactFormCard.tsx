"use client";

import { motion } from "framer-motion";
import { toast } from "sonner";
import { useState } from "react";
import { BsSend, BsSendCheck } from "react-icons/bs";
import { Card } from "../ui/card";

const viewportConfig = { once: true, margin: "-100px" as const };

export const ContactFormCard = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Simulate sending (no backend in local dev)
    await new Promise((resolve) => setTimeout(resolve, 1200));

    toast.success("Message sent! I'll get back to you soon.");
    setIsSent(true);
    setFormValues({
      senderName: "",
      senderEmail: "",
      reasonToContact: "General inquiries",
      senderMsg: "",
    });
    setIsSending(false);

    setTimeout(() => setIsSent(false), 3000);
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
          background: "hsl(var(--glass-bg))",
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
                  background: "hsl(var(--glass-bg))",
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
                  background: "hsl(var(--glass-bg))",
                  borderColor: "hsl(var(--glass-border))",
                }}
              />
            </div>

            <select
              required
              name="reasonToContact"
              onChange={handleChange}
              value={formValues.reasonToContact}
              className="w-full px-4 py-3 text-sm rounded-xl backdrop-blur-xl border transition-all duration-200 outline-none focus:ring-2 focus:ring-primary/50 hover:border-primary/30"
              style={{
                color: "hsl(var(--foreground))",
                background: "hsl(var(--glass-bg))",
                borderColor: "hsl(var(--glass-border))",
              }}
            >
              <option value="General inquiries">General Inquiries</option>
              <option value="Project inquiries">Project Inquiries</option>
              <option value="Collaboration request">Collaboration Request</option>
              <option value="Internship/Job opportunity">Internship / Job Opportunity</option>
              <option value="Feedback/Question">Feedback / Question</option>
            </select>

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
              disabled={isSending}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="w-full btn-primary px-6 py-3 rounded-xl font-medium text-base flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSending ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
                  />
                  <span>Sending...</span>
                </>
              ) : isSent ? (
                <>
                  <BsSendCheck className="w-5 h-5" />
                  <span>Sent!</span>
                </>
              ) : (
                <>
                  <BsSend className="w-5 h-5" />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </div>
      </Card>
    </motion.div>
  );
};
