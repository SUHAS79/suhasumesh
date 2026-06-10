import React from "react";

import { FaPython, FaGitAlt, FaGithub, FaYoutube } from "react-icons/fa6";
import { SiScikitlearn, SiPandas, SiNumpy, SiMysql, SiJupyter, SiStreamlit, SiJira, SiSqlite } from "react-icons/si";
import { TbBrandVscode, TbChartDots3Filled, TbCursorText } from "react-icons/tb";
import { FaC } from "react-icons/fa6";
import { MdOutlineManageAccounts, MdPsychology } from "react-icons/md";

interface LogoProps {
  title: string;
  logoComponent: React.FC;
  color?: string;
}

interface SkillsDataProps {
  title: string;
  data: LogoProps[];
}

export const skillsData: SkillsDataProps[] = [
  {
    title: "Languages & Databases",
    data: [
      { title: "Python",    logoComponent: FaPython,   color: "#3776AB" },
      { title: "C",         logoComponent: FaC,        color: "#A8B9CC" },
      { title: "MySQL",     logoComponent: SiMysql,    color: "#4479A1" },
      { title: "SQLite",    logoComponent: SiSqlite,   color: "#003B57" },
    ],
  },
  {
    title: "ML & Data Science",
    data: [
      { title: "Scikit-learn", logoComponent: SiScikitlearn, color: "#F7931E" },
      { title: "Pandas",       logoComponent: SiPandas,      color: "#150458" },
      { title: "NumPy",        logoComponent: SiNumpy,       color: "#013243" },
      { title: "Matplotlib",   logoComponent: TbChartDots3Filled, color: "#11557C" },
      { title: "Streamlit",    logoComponent: SiStreamlit,   color: "#FF4B4B" },
      { title: "Jupyter",      logoComponent: SiJupyter,     color: "#F37626" },
    ],
  },
  {
    title: "Tools & Platforms",
    data: [
      { title: "Git",     logoComponent: FaGitAlt,   color: "#F05032" },
      { title: "GitHub",  logoComponent: FaGithub,   color: "#d4d4d8" },
      { title: "VS Code", logoComponent: TbBrandVscode, color: "#007ACC" },
      { title: "Cursor",  logoComponent: TbCursorText, color: "#d4d4d8" },
      { title: "Jira",    logoComponent: SiJira,     color: "#0052CC" },
    ],
  },
  {
    title: "PM & Methodology",
    data: [
      { title: "Agile / Scrum",    logoComponent: MdOutlineManageAccounts, color: "#d4d4d8" },
      { title: "Google PM Suite",  logoComponent: MdOutlineManageAccounts, color: "#4285F4" },
      { title: "Behavioural Research", logoComponent: MdPsychology,        color: "#fb923c" },
      { title: "Content Strategy", logoComponent: FaYoutube,               color: "#FF0000" },
    ],
  },
];
