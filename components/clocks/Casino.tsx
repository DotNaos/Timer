"use client";
import { CountdownContext } from "@/app/providers";
import { Divider } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";



const CasinoClock = () => {
  const timeLeft = useContext(CountdownContext);


  return (
    <div
      className="relative grid-cols-2
      sm:grid-cols-4
      grid
      items-center justify-center
      w-screen h-screen overflow-clip
      pt-[5vh]
      "
    >
      <Slot range={365} time={timeLeft.days} />
      <Slot range={24} time={timeLeft.hours} />
      <Slot range={60} time={timeLeft.minutes} />
      <Slot range={60} time={timeLeft.seconds} />

    </div>
  );
};

export default CasinoClock;


const Slot = ({ range, time }: { range: number; time: number }) => {
  const length = range.toString().length;

  const points = 8;
  const slotsArray = Array.from({ length: range }, (_, i) => i);

  const steps = 360 / points;

  const clamp = (number: number) => (number + range) % range;

  const minSub = (number: number) =>
    Math.min(number - time, range - number + time);

  const minDist = (number: number) =>
    Math.min(Math.abs(number - time), Math.abs(range - number + time));

  console.log("\n\n");
  // h-[70vh]
  return (
    <div
      className={`
    relative
    left-1/2 -translate-x-1/2

    rounded-[2vw]
    m-1
    bg-gradient-to-r
    from-default-200 to-default-200 via-default-100
    shadow-lg shadow-default-200
    `.concat(length == 3 ? "w-[14vw] aspect-[2/5]" : "w-[10vw]  aspect-[2/7]")}
    >
      {slotsArray.map((i) => {
        const sub = time - i;
        const rotation = sub * 30;
        const pos = -sub * 150;

        if (minDist(i) > 2) {
          return null;
        }

        const out = clamp(i);

        return (
          <motion.div
            key={i}
            className="
            absolute w-min h-min
            px-[2vw]
            left-1/2 top-1/2
            transform -translate-x-1/2 -translate-y-1/2
            flex justify-center items-center

            text-[6vw]
            rounded-[2vw]

            font-mono font-black text-center
            bg-default-50
            bg-opacity-70 backdrop-blur-md

            "
            style={{
              zIndex: 10 - minDist(i),
              originZ: "-20vw",
              translateX: "-50%",
              translateY: "-50%",
              opacity: 0,
              y: `${pos / 14}vw`,
              // rotateX: rotation,
              perspective: 1000,
              color: "#FFFFFF11",
            }}
            animate={{
              z: 10 - minDist(i),
              // rotateX: rotation,
              y: `${pos / 14}vw`,
              opacity: minDist(i) < 2 ? 1 : 0,
              color: minDist(i) < 1 ? "white" : "#FFFFFF11",
              // scale: minDist(i) < 1 ? 1 : .5,
            }}
            transition={{ type: "spring", duration: 1 }}
          >
            <span className="z-10">{out.toString().padStart(length, "0")}</span>
          </motion.div>
        );
      })}
    </div>
  );
}
