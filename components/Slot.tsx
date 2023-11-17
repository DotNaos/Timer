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

  const distToMax = (number: number) => range - number;
  const distToMin = (number: number) => number;

  const minDist = (number: number) => Math.min(Math.abs(number - time), Math.abs(range - number + time));
  const progress = (i : number = 0) =>  range - time + i;

  console.log("\n\n")

  return (
    <div className="flex">
      <div
        className="
    relative
    bg-gradient-to-t from-black to-black via-[#FFFFFF2F]
    "
      >
        {slotsArray.map((i) => {

          const sub = time - i;
          const dist = Math.abs(sub);
          console.log(sub)




          const rotation =  sub * steps;

          if (minDist(i) > 2) {
            return null;
          }
          const out = clamp(i);



          return (
            <motion.div
              key={i}
              className="
            absolute w-min h-min
             py-8 px-8
            text-xl font-mono text-center
            bg-gradient-to-t from-default-50 to-default-50 via-default-100
            border-x border-default-500 border-opacity-20
            "
              style={{
                originZ: -350,
              }}
              animate={{
                rotateX: rotation,
              }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              {out.toString().padStart(length, "0")}
            </motion.div>
          );
        })}
      </div>

      <div className="absolute left-0 bottom-0 pb-10 pl-10 text-9xl flex flex-col">
        <span>{clamp(time - 2)}</span>
        <span>{clamp(time - 1)}</span>
        <span className="font-black text-red-500">{time}</span>
        <span>{clamp(time + 1)}</span>
        <span>{clamp(time + 2)}</span>
      </div>
      <Progress
        value={range - time}
        maxValue={range}
        className="absolute bottom-0 left-0"
      />
    </div>
  );
}
