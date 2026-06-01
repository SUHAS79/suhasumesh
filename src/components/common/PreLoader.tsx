"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FC, useState, useEffect } from "react";
import { nasalization } from "@/app/fonts";
import { selfData } from "@/constant";
import { Background } from "./Background";

interface H1ComponentProps {
  name: string;
  yInitial: number;
}

const H1Component: FC<H1ComponentProps> = ({ name, yInitial }) => {
  return (
    <motion.h1
      initial={{ y: yInitial, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className={`text-slate-200 text-4xl ${nasalization.className}`}
    >
      {name}
    </motion.h1>
  );
};

export const PreLoader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="overflow-x-hidden w-full h-screen fixed inset-0 z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <div className="flex items-center justify-center fixed h-full w-full">
            <Background />
            <motion.div
              className="flex justify-center items-center tracking-widest mx-auto container text-2xl text-slate-400"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <H1Component name={selfData.first_name} yInitial={40} />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="mx-2"
              >
                /
              </motion.span>
              <H1Component name={selfData.last_name} yInitial={-40} />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
