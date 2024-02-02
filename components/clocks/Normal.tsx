"use client";
import { CountdownContext } from "@/app/providers";
import { Divider } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";



const NormalClock = () => {
  const timeLeft = useContext(CountdownContext);

  const data = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds];
  return (
    <div
      className="
      grid-cols-4
       portrait:grid-cols-2
      grid
      items-center justify-center
      w-full h-min
      "
    >
      {data.map((value, i) => {
        return (
          <div key={i} className="flex flex-col items-center justify-between text-default-700">
            <span className="text-[10vw] portrait:text-[10vh] font-bold text-center">
              {value}
            </span>
            <span className="text-[2vw] portrait:text-[2vh] font-bold text-center">
              {i === 0
                ? "Days"
                : i === 1
                ? "Hours"
                : i === 2
                ? "Minutes"
                : i === 3
                ? "Seconds"
                : ""}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default NormalClock;
