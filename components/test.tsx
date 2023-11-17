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
    <div className="countdown">
      <div className="slot">
        <motion.div className="number prev">{prevDays}</motion.div>
        <motion.div className="number current">{countdown.days}</motion.div>
      </div>

      <div className="slot">
        <motion.div className="number prev">{prevHours}</motion.div>
        <motion.div className="number current">{countdown.hours}</motion.div>
      </div>

      <div className="slot">
        <motion.div className="number prev">{prevMins}</motion.div>
        <motion.div className="number current">{countdown.minutes}</motion.div>
      </div>

      <div className="slot">
        <motion.div className="number prev">{prevSecs}</motion.div>
        <motion.div className="number current">{countdown.seconds}</motion.div>
      </div>
    </div>
  );
}

export default App;
