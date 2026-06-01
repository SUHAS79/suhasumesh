import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { selfData } from "@/constant";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const socialLinks = [
  {
    Icon: FaGithub,
    link: `https://github.com/${selfData.socials_username.github}`,
    show: !!selfData.socials_username.github,
  },
  {
    Icon: FaLinkedinIn,
    link: `https://www.linkedin.com/in/${selfData.socials_username.linkedin}`,
    show: !!selfData.socials_username.linkedin,
  },
];

export const ContactSocials = () => {
  const active = socialLinks.filter((s) => s.show);

  return (
    <motion.ul
      className="flex mt-4 space-x-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {active.map((social, index) => (
        <motion.li
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.15 }}
          className="h-10 w-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-200"
          style={{
            background: "hsl(var(--primary) / 0.18)",
            border: "1px solid hsl(var(--glass-border))",
            color: "hsl(var(--primary))",
          }}
        >
          <Link
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <social.Icon className="w-5 h-5" />
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};
