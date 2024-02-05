"use client";
import { CountdownContext } from "@/app/providers";
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

  return (
    <div className="flex flex-col items-center justify-center h-24 w-12">
      <div className="w-full px-1 flex flex-col">
        <div
          className={`w-full h-1 border-[2px] border-transparent border-b-[2px] ${
            segments[0] === "1" ? "border-b-red-500" : "border-b-default-50"
          } border-t-0

        `}
        ></div>
        <div
          className={`w-full h-1 border-[2px] border-transparent border-b-0  ${
            segments[0] === "1" ? "border-t-red-500" : "border-t-default-50"
          }`}
        ></div>
      </div>
      <div className="flex justify-between w-full h-10">
        <div className="h-full flex">
          <div
            className={`h-full w-1 border-[2px] border-transparent border-r-[2px] ${
              segments[1] === "1" ? "border-r-red-500" : "border-r-default-50"
            } border-l-0

        `}
          ></div>
          <div
            className={`h-full w-1 border-[2px] border-transparent border-l-[2px] ${
              segments[1] === "1" ? "border-l-red-500" : "border-l-default-50"
            } border-r-0

        `}
          ></div>
        </div>
        <div className="h-full flex">
          <div
            className={`h-full w-1 border-[2px] border-transparent border-r-[2px] ${
              segments[2] === "1" ? "border-r-red-500" : "border-r-default-50"
            } border-l-0

        `}
          ></div>
          <div
            className={`h-full w-1 border-[2px] border-transparent border-l-[2px] ${
              segments[2] === "1" ? "border-l-red-500" : "border-l-default-50"
            } border-r-0

        `}
          ></div>
        </div>
      </div>
      <div className="w-full px-1 flex flex-col">
        <div
          className={`w-full h-1 border-[2px] border-transparent border-b-[2px] ${
            segments[3] === "1" ? "border-b-red-500" : "border-b-default-50"
          } border-t-0

        `}
        ></div>
        <div
          className={`w-full h-1 border-[2px] border-transparent border-b-0  ${
            segments[3] === "1" ? "border-t-red-500" : "border-t-default-50"
          }`}
        ></div>
      </div>
      <div className="flex justify-between w-full h-10">
        <div className="h-full flex">
          <div
            className={`h-full w-1 border-[2px] border-transparent border-r-[2px] ${
              segments[4] === "1" ? "border-r-red-500" : "border-r-default-50"
            } border-l-0

        `}
          ></div>
          <div
            className={`h-full w-1 border-[2px] border-transparent border-l-[2px] ${
              segments[4] === "1" ? "border-l-red-500" : "border-l-default-50"
            } border-r-0

        `}
          ></div>
        </div>
        <div className="h-full flex">
          <div
            className={`h-full w-1 border-[2px] border-transparent border-r-[2px] ${
              segments[5] === "1" ? "border-r-red-500" : "border-r-default-50"
            } border-l-0

        `}
          ></div>
          <div
            className={`h-full w-1 border-[2px] border-transparent border-l-[2px] ${
              segments[5] === "1" ? "border-l-red-500" : "border-l-default-50"
            } border-r-0

        `}
          ></div>
        </div>
      </div>
      <div className="w-full px-1 flex flex-col">
        <div
          className={`w-full h-1 border-[2px] border-transparent border-b-[2px] ${
            segments[6] === "1" ? "border-b-red-500" : "border-b-default-50"
          } border-t-0

        `}
        ></div>
        <div
          className={`w-full h-1 border-[2px] border-transparent border-b-0  ${
            segments[6] === "1" ? "border-t-red-500" : "border-t-default-50"
          }`}
        ></div>
      </div>
    </div>
  );
      };
