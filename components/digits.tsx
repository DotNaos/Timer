"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
export function Digits({
  value,
  n,
  count,
}: {
  value: number;
  n: number;
  count: number;
}) {

  const step = 360 / count;

  return (
    <div className="relative w-full h-full">
      <AnimatePresence>
        <motion.div
          className="absolute"
          key={value}
          initial={{
            y: n * 100 + 400,
            opacity: 0,
            rotateX: step * n - step,
          }}
          exit={{
            y: n * 100- 400,
            opacity: 0,
            rotateX: step * n + step,
          }}
          animate={{
            y: n * 100,
            opacity: 1,
            rotateX: step * n,
          }}
          transition={{
            ease: "easeOut",
            duration: 10,
          }}
        >
          {value}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
