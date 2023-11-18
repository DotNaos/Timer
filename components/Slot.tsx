import { Progress } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Dispatch, useState } from "react";
import { start } from "repl";

export default function Slot({ range, time }: { range: number; time: number }) {
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

  return (
    <div
      className={`
    relative
    h-[70vh]
    rounded-[2vw]
    m-1
    bg-gradient-to-r
    from-default-200 to-default-200 via-default-100
    shadow-lg shadow-default-200
    `.concat(length == 3 ? "w-[14vw]" : "w-[10vw]")}
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
              y: pos,
              // rotateX: rotation,
              perspective: 1000,
              color: "#FFFFFF11",
            }}
            animate={{
              z: 10 - minDist(i),
              // rotateX: rotation,
              y: pos,
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
