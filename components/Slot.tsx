import { motion } from "framer-motion";

export default function Slot({ range, value }: { range: number, value: number}) {
  const step = 360 / range;
  const pointsArray = Array.from({ length: range+1 }, (_, i) => i);


  return (
    <div className="relative bg-gradient-to-t from-black to-black via-[#FFFFFF2F] w-full h-1/2 px-8">
      {pointsArray.map((i) => {

        const dist = Math.abs(i - value);
        if (dist > 2) {
          return null;
        }
        const sub = i - value;
        return (
          <motion.div
            key={i}
            className="absolute w-full top-0 left-0 text-[300px] [backface-visibility: hidden]"
            style={{
              rotateX: dist * step,
              originZ: -350,
              opacity: (1.0 - (dist / range)),
              y: (sub * 300),
            }}
            animate={{
              rotateX: -360 * dist,
            }}

            transition={{ type: "ease", duration: 5 }}
          >
            {i}
          </motion.div>
        );
      })}
    </div>
  );
}
