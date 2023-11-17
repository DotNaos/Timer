import { Progress } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Dispatch, useState } from "react";
import { start } from "repl";

export default function Slot({
  range,
  time,
}: {
  range: number;
  time: number;
}) {
  const length = range.toString().length;

  const points = 8;
  const slotsArray: Array<number> = (() => {
    const tmp = [];
    for (let i = -Math.floor(points / 2); i < Math.floor(points / 2); i++) {
      tmp.push(time - i);
    }
    return tmp;
  })();

  const steps = 360 / points;

  const clamp = (number: number) =>  (number + range) % range;






  return (
    <div className="flex">
      <div
        className="
    relative
    bg-gradient-to-t from-black to-black via-[#FFFFFF2F]
    "
      >
        {slotsArray.map((value, i) => {
          const out = clamp(value);

          const dist = Math.abs(time - value);

          const progress = range - value;

          const rotation = steps * progress;

          if (dist > 1) {
            return null;
          }

          console.log(progress);

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
                zIndex: 1 - dist,
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
        value={time}
        maxValue={range}
        className="absolute bottom-0 left-0"
      />
    </div>
  );
}
