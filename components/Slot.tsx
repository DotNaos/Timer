import { motion } from "framer-motion";
import { start } from "repl";

export default function Slot({
  range,
  value,
}: {
  range: number;
  value: number;
}) {
  const length = range.toString().length;

  const points = 8;
  const slotsArray = Array.from({ length: points }, (_, i) => i);
  const steps = 360 / points;

  return (
    <div
      className="
    relative
    bg-gradient-to-t from-black to-black via-[#FFFFFF2F]
    "
    >
      {slotsArray.map((i) => {
        i = i - Math.floor(points / 2);
        // calculate the difference between the value and i with using the shortest path
        // If the value is near a boundary, the shortest path is to go through 0

        const out = Math.abs(value + i);





        return (
          <motion.div
            key={i}
            className="
            absolute w-min h-min
            pt-12 py-8 px-8
            text-xl font-mono text-center
            bg-gradient-to-t from-default-50 to-default-50 via-default-100
            border-x border-default-500 border-opacity-20
            "
            style={{
              originZ: -350,
              rotateX: steps * i,

            }}
            animate={{
              rotateX: steps * (i + 1),
            }}
            transition={{ type: "ease", duration: 0.5 }}
          >
            {/* {out.toString().padStart(length, "0")} */}
          </motion.div>
        );
      })}
    </div>
  );
}
