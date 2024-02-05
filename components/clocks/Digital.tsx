"use client";
import { CountdownContext } from "@/app/providers";
import { useContext, useEffect, useState } from "react";

const DigitalClock = () => {
  const timeLeft = useContext(CountdownContext);

  return (
    <div>
      <DotNumber digit={timeLeft.days} />
      <span>:</span>
      <DotNumber digit={timeLeft.hours} />
      <span>:</span>
      <DotNumber digit={timeLeft.minutes} />
      <span>:</span>
      <DotNumber digit={timeLeft.seconds} />
    </div>
  );
}


export default DigitalClock;

const DotNumber = (digit: any) => {
  const digits = [

  ]

  return (
    <>
    </>
  )
  }

