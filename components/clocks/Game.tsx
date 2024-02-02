"use client";
import { CountdownContext } from "@/app/providers";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";

const GameClock = () => {
  const timeLeft = useContext(CountdownContext);

  return (
    <div className="flex w-screen h-screen gap-5 items-center justify-center text-[8vw] text-white ">
      <Digit value={timeLeft.days} />
      <Digit value={timeLeft.hours} />
      <Digit value={timeLeft.minutes} />
      <Digit value={timeLeft.seconds} />
    </div>
  );
}

export default GameClock;

const Digit = ({value } : {value : number})  => {
  return (
    <div className="relative flex flex-col gap-1 rounded-xl bg-default-300 text-clip overflow-clip">
      {
        Array.from([0,1]).map((_, i) => {
          return <motion.div
          style={{
            rotateX: value * 180
          }}
          animate={{
            rotateX: i+value * 180,
          }}
          transition={{
            type: "tween",
            duration: 1,

          }}

          key={i} className={(`h-[8vw] bg-black p-4 ${i == 1 ? "rounded-b-xl" : "rounded-t-xl"}`) }>
            {value}
          </motion.div>
        })
      }
    </div>
  )
}
