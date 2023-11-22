"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function App() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [prevDays, setPrevDays] = useState(0);
  const [prevHours, setPrevHours] = useState(0);
  const [prevMins, setPrevMins] = useState(0);
  const [prevSecs, setPrevSecs] = useState(0);

  useEffect(() => {
    const end = new Date("December 31, 2023 23:59:59").getTime();


    const interval = setInterval(() => {
      const now = new Date().getTime();

      const diff = end - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
      const minutes = Math.floor(diff / (1000 * 60)) % 60;
      const seconds = Math.floor(diff / 1000) % 60;

      setCountdown({
        days,
        hours,
        minutes,
        seconds,
      });

      setPrevDays(days);
      setPrevHours(hours);
      setPrevMins(minutes);
      setPrevSecs(seconds);
    }, 1000);

    return () => clearInterval(interval);
  }, []);




  return (
    <div className="flex w-full h-full pt-[50vh] justify-center items-start text-black font-mono">
        <Col value={countdown.days} range={365} />
        <Col value={countdown.hours} range={24} />
        <Col value={countdown.minutes} range={60} />
        <Col value={countdown.seconds} range={60} />
    </div>
  );
}
export default App;


function Col({ value, range } : { value: number, range: number }) {
    const genDigits = (range: number) => {
      let digits = "";

      for (let i = 0; i < range + 1; i++) {
        const digit = i.toString().padStart(range > 100 ? 3 : 2, "0");
        digits += " " + digit;
      }

      return digits;
    };

    const digit = genDigits(range);

  return (
      <motion.div className="flex w-min h-[200vw] text-[15vw] overflow-hidden"
        style={{
          transform: `translateY(-${2*value}vh)`,
        }
        }

        animate={{
          // translateY: `-${1*value}vh`,
        }}
      >
        {digit}
        {/* {value} */}
      </motion.div>
  );
}
