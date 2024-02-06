"use client";
import { CountdownContext } from "@/app/providers";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";

const DigitalClock = () => {
  const timeLeft = useContext(CountdownContext);

  return (
    <div className="flex gap-3 items-center justify-center flex-wrap portrait:flex-col portrait:gap-10">
      <div className="flex items-center justify-center gap-3">
        <Segment value={timeLeft.days} len={2} />
        <div className="flex flex-col h-full items-center justify-center gap-5">
          <div className="w-2 h-2 bg-default-50 rounded-full"></div>
          <div className="w-2 h-2 bg-default-50 rounded-full"></div>
        </div>
        <Segment value={timeLeft.hours} len={2} />
      </div>
      <div className="flex flex-col h-full items-center justify-center gap-5 portrait:hidden">
        <div className="w-2 h-2 bg-default-50 rounded-full"></div>
        <div className="w-2 h-2 bg-default-50 rounded-full"></div>
      </div>
      <div className="flex items-center justify-center gap-3">
        <Segment value={timeLeft.minutes} len={2} />
        <div className="flex flex-col h-full items-center justify-center gap-5">
          <div className="w-2 h-2 bg-default-50 rounded-full"></div>
          <div className="w-2 h-2 bg-default-50 rounded-full"></div>
        </div>
        <Segment value={timeLeft.seconds} len={2} />
      </div>
    </div>
  );
}


export default DigitalClock;

const Segment = ({ value, len }: { value: number; len: number }) => {
  let digits = value.toString().padStart(len, "0").split("");

  return (
    <>{
      digits.map((digit: string, i) => (
          <Digit key={i} value={parseInt(digit)} />
          ))
    }
    </>
  )
};


const Digit = ({ value }: { value: number }) => {
  const digits = [
    "1110111", // 0
    "0010010", // 1
    "1011101", // 2
    "1011011", // 3
    "0111010", // 4
    "1101011", // 5
    "1101111", // 6
    "1010010", // 7
    "1111111", // 8
    "1111011", // 9
  ];

  const segments = digits[value].split("");


  const Hor = ({ seg }: any) => {
    const bg = segments[seg] === "1" ? "bg-red-500" : "bg-default-50";

    return (
      <div className="w-full h-1 px-[12.5%]">
        <div
          className={`relative w-full h-full ${bg}`}
        >
          <div
            className={`rotate-45 h-[75%] aspect-square  absolute left-0 -translate-x-1/2  top-1/2 -translate-y-1/2 ${bg}`}
          ></div>
          <div
            className={`rotate-45 h-[75%] aspect-square  absolute right-0 translate-x-1/2  top-1/2 -translate-y-1/2 ${bg}`}
          ></div>
        </div>
      </div>
    );
  }

    const Vert = ({ seg }: any) => {
      const bg = segments[seg] === "1" ? "bg-red-500" : "bg-default-50";
      return (
       <div className="h-full w-1 py-[5%]">
        <div className={`relative h-full w-full ${bg}`}>
          <div className={`rotate-45 w-[75%] aspect-square ${bg} absolute left-1/2 -translate-x-1/2  top-0 -translate-y-1/2 `}></div>
          <div className={`rotate-45 w-[75%] aspect-square ${bg} absolute left-1/2 -translate-x-1/2  bottom-0 translate-y-1/2`}></div>
        </div>
      </div>
      )

      };


  return (
    <div className="flex flex-col items-center justify-center h-24 w-12">
      <Hor seg={0} />
      <div className="flex justify-between w-full h-[40%]">
        <Vert seg={1} />
        <Vert seg={2} />
      </div>
      <Hor seg={3} />
      <div className="flex justify-between w-full h-[40%]">
        <Vert seg={4} />
        <Vert seg={5} />
      </div>
      <Hor seg={6} />
    </div>
  );
      };
