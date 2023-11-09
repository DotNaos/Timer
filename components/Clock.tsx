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
    <>
      <div className="relative flex items-center justify-evenly gap-8 w-full h-full overflow-scroll">
        <Slot range={365} value={days} />
        <Slot range={60} value={hours} />
        <Slot range={60} value={minutes} />
        <Slot range={60} value={seconds} />
      </div>
    </>
  );
};

export default CountdownClock;
