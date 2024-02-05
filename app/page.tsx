"use client";


import { useState } from "react";
import { motion } from "framer-motion";
import NormalClock from "@/components/clocks/Normal";
import DigitalClock from "@/components/clocks/Digital";


export default function Home() {
  const clocks = [
    {
      key: "Normal",
      clock: <NormalClock />,
    },
    {
      key: "Digital",
      clock: <DigitalClock />,
    },
    {
      key: "Normal",
      clock: <NormalClock />,
    },
  ];

  const [selected, setSelected] = useState(0);

  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden text-default">
      {/* Side Navigation for all clocks */}
      <div className="absolute right-0 top-1/2 flex flex-col items-center -translate-y-1/2 z-[9999] mx-4">
        <div
          className={`relative rounded-full items-center flex flex-col portrait:w-[2vh] portrait:gap-[1.5vh] w-[1.5vw] gap-[1vw] bg-default/50`}
        >
          {clocks.map((_, i) => (
            <motion.div
              key={i}
              className="bg-default-900 rounded-full w-full aspect-square"
              animate={{
                scale: i === selected ? 1.5 : 1,
              }}
              transition={{
                duration: 0.2,
              }}
              onClick={() => {
                setSelected(i);
              }}
            ></motion.div>
          ))}
        </div>
      </div>

      {/* Clock */}
      <div className="w-full h-full flex items-center justify-center">
        {clocks.at(selected)?.clock}
      </div>
    </div>
  );
}

