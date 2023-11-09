import { motion } from "framer-motion";
import { start } from "repl";

export default function Slot({ range, value }: { range: number, value: number}) {
  const step = 360 / range;
  const pointsArray = Array.from({ length: range+1, }, (_, i) => i);


  return (
    <div className="relative flex flex-col items-center  text-center justify-center bg-gradient-to-t from-black to-black via-[#FFFFFF2F] w-min py-8 h-full">
      {pointsArray.map((i) => {
        const mid = Math.floor(range / 2);

        const midSub = mid - i;

        const midDist = Math.abs(midSub);

        const slots: number = 3;

        if (midDist > Math.max(slots - 2, 1)) {
          return null;
        }

        const out = Math.max(value - midSub, 0);


        const sub = midSub ;
        const dist = Math.abs(sub);

        // console.log(midSub);



        // console.log(value);

        return (
          <motion.div
            key={i}
            className="relative w-min h-min pt-12
            py-8
            px-8 text-xl font-mono [backface-visibility: hidden]
            bg-gradient-to-t from-default-50 to-default-50 via-default-100
            border-x border-default-500 border-opacity-20
            "
            style={{
              originZ: -350,
              // opacity: 0,
              // rotateX: sub * 60,
              // y: (sub * 300) + 300,
            }}
            animate={
              {
                // rotateX: sub * 45,
                // y: (sub * 300) + 300,
                // opacity: dist == 0 ? 1 : dist == 1 ? 0.5 : 0,
              }
            }
            transition={{ type: "ease", duration: 0.5 }}
          >
            {out.toString().padStart(range >= 100 ? 3 : 2, "0")}
          </motion.div>
        );
      })}
    </div>
  );
}
