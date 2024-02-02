"use client";

import useCountdown from "@/hooks/useCountdown";
import { Button } from "@nextui-org/button";
import RainbowClock from "../components/clocks/Rainbow";
import { createContext, useState } from "react";
import CasinoClock from "@/components/clocks/Casino";
import { motion } from "framer-motion";


export default function Home() {
  const [open, setOpen] = useState(false);


  const clocks = [
    {
      key: "Rainbow",
      clock: <RainbowClock />,
    },
    {
      key: "Casino",
      clock: <CasinoClock />,
    },
    {
      key: "Digital",
      clock: <CasinoClock />,
    }
  ];

  const [selected, setSelected] = useState(clocks.at(0)?.key);

  // All keys
  const keys = clocks.map((clock) => clock.key);

  return (
    <div className="w-screen h-screen flex justify-center items-center overflow-hidden text-default">
      {/* A  circular custom dropdown to choose a clock */}
      <CircularDropdown keys={keys} isOpen={open} />

      <Button onClick={() => setOpen(!open)}>Show Option</Button>
    </div>
  );
}


const CircularDropdown = ({
  keys,
  isOpen,
}: {
  keys: Array<string>;
  isOpen: boolean;
}) => {

  return isOpen ? (
    <div className="fixed w-screen h-screen z-[9999] backdrop-blur-md bg-black bg-opacity-70 flex items-center pl-[5vw]">
      <div className="relative flex flex-col w-[50vw] bg-red-500 rounded-2xl text-[10vw]">
        {keys.map((key, index) => (
          <motion.div
            key={key}
            className="group relative flex items-center overflow-clip hover:text-white hover:pl-[17%] pr-[150%] hover:cursor-pointer  text-default-50/50 transition-all duration-500 font-semibold"
            onClick={() => console.log(key)}
          >
            {/* <div className="absolute -translate-x-[150%] bg-white rounded-full w-[5%] aspect-square transition-all duration-200"></div> */}
            {key}
          </motion.div>
        ))}
      </div>
    </div>
  ) : (
    <></>
  );
};
