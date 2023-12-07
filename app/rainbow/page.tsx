"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Divider } from "@nextui-org/react";

function RainbowClock() {
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
    <div className="flex w-full h-full pt-[40vh] justify-evenly items-start text-black">
      <Col value={days} range={365} />
      <Col value={hours} range={24} />
      <Col value={minutes} range={60} />
      <Col value={seconds} range={60} />
    </div>
  );
}
export default RainbowClock;

function Col({ value, range }: { value: number; range: number }) {
  const len = range.toString().length;
  const genDigits = (range: number) => {
    let digits = "";

    for (let i = 0; i < range + 1; i++) {
      const digit = i.toString().padStart(len, "0");
      digits += " " + digit;
    }

    return digits;
  };

  const digit = genDigits(range);
  const y = -22.5 * value;

  const color = () => {
    // Calculate a hex color based on the value
    // It rotates through hues from 0 to 360
    const hue = Math.floor((value / range) * 360);
    return `hsl(${hue}, 100%, 50%)`;
  };

  console.log(value);
  return (
    <div
      className={`h-[22.5vw] relative overflow-hidden ${
        len == 2 ? "w-[17.5vw]" : "w-[27.5vw]"
      }`}
    >
      <motion.div
        className={`absolute flex  text-[15vw] overflow-hidden w-full justify-center items-center text-center `}
        style={{
          // y: `${range}`,
          // translateY: `${value}vw`,
          y: `${y}vw`,
          color: color(),
        }}
        animate={{
          y: `${y}vw`,
          color: color(),
        }}
        transition={{
          ease: "linear",
          duration: 1,
        }}
      >
        {digit}
        {/* {value} */}
      </motion.div>
    </div>
  );
}
