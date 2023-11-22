"use client";
import { Digits } from "./digits";
import { Divider } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Slot from "./Slot";

const CountdownClock = () => {
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    const targetDate = new Date("2024-04-19T00:00:00Z").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setCountdown(difference);
      }
    };

    const countdownInterval = setInterval(updateCountdown, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countdown % (1000 * 60)) / 1000);


  return (
    <div
      className="relative grid-cols-2
      sm:grid-cols-4
      grid
      items-center justify-center
      w-screen h-screen overflow-clip
      pt-[5vh]
      "
      // onMouseMove={(e) => {
      //   setMouseX(e.clientX);
      //   setMouseY(e.clientY);
      // }}
    >
      <Slot range={365} time={days} />
      <Slot range={24} time={hours} />
      <Slot range={60} time={minutes} />
      <Slot range={60} time={seconds} />



      {/* <motion.div className="absolute w-1/2 rounded-full aspect-square overflow-hidden left-0 opacity-50 blur-[50px]"
        animate={{
          x: mouseX - 100,
          y: mouseY - 100,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 0.5,
        }
      }
        >
          <div className="absolute w-full h-full bg-white z-10 backdrop-blur-3xl blur-[200px] rounded-full "></div>
          <div className="absolute w-full h-full bg-blue-300 rounded-full"></div>
        </motion.div> */}
    </div>
  );
};

export default CountdownClock;
