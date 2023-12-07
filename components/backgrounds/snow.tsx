"use client";
import { motion } from "framer-motion";

export const Snow = ({len = 50} : {len : number}) =>
{
  return (
    <motion.div className="absolute w-screen h-screen overflow-hidden scrollbar-hide">
      {Array.from({ length: len }).map((_, i) => {
        return (

            <motion.div
              key={i}
              className="absolute w-[1vw] h-[1vw] rounded-full bg-default-200"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                rotate: [0, 360, 0],
                transition: {
                  duration: Math.random() * 2 + 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
            />
        );
      })}
    </motion.div>
  );
}
