"use client";

import { useState } from "react";
import { TbHeart, TbHeartFilled } from "react-icons/tb";
import { LuGithub, LuLinkedin, LuTwitter, LuMail } from "react-icons/lu";
import { quentine } from "@/app/fonts";
import { selfData } from "@/constant";

export const Footer = () => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const socialLinks = [
    {
      icon: LuGithub,
      href: `https://github.com/${selfData.socials_username.github}`,
      label: "GitHub",
    },
    {
      icon: LuLinkedin,
      href: `https://linkedin.com/in/${selfData.socials_username.linkedin}`,
      label: "LinkedIn",
    },
    {
      icon: LuTwitter,
      href: `https://twitter.com/${selfData.socials_username.twitter}`,
      label: "Twitter",
    },
    {
      icon: LuMail,
      href: `mailto:${selfData.email}`,
      label: "Email",
    },
  ];

  return (
    <footer className="relative bg-background/10 backdrop-blur-md border-t border-border/50 overflow-hidden">
      {/* Decorative corner glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, hsl(var(--secondary)) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-6 overflow-x-hidden">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl border border-primary/90 flex items-center justify-center bg-primary/10 p-1.5">
              <span className={`${quentine.className} text-sm text-primary font-bold`}>
                {selfData.first_name[0]}{selfData.last_name[0]}
              </span>
            </div>
            <h3 className={`${quentine.className} text-2xl font-semibold text-primary`}>
              {selfData.name}
            </h3>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-primary/30 bg-card/50 hover:bg-primary/10 hover:text-primary text-muted-foreground transition-colors duration-200"
              >
                <link.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-4" />

        <div className="text-xs text-center text-muted-foreground space-y-2">
          <p className="flex items-center justify-center gap-2">
            Made with
            <button
              onClick={() => setIsHeartFilled(!isHeartFilled)}
              className="text-primary"
              aria-label="Toggle heart"
            >
              {isHeartFilled ? <TbHeartFilled /> : <TbHeart />}
            </button>
            by
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-primary/80 hover:text-primary transition-colors duration-200"
            >
              {selfData.name}
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
};
