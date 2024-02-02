"use client";
import { CountdownContext } from "@/app/providers";
import { useContext, useEffect, useState } from "react";

const DigitalClock = () => {
  const timeLeft = useContext(CountdownContext);

  return (
    <div>
      <div className="flex w-screen h-screen gap-5 items-center justify-center text-[8vw] text-white ">
        <Column value={timeLeft.days} max={365} />
        {/* <Column value={timeLeft.hours} max={24} />
        <Column value={timeLeft.minutes} max={60} />
        <Column value={timeLeft.seconds} max={60} /> */}
      </div>
    </div>
  );
}


export default DigitalClock;


const Column = ({value=0, max} : {value? : number, max:number}) => {

  const count = max.toString().length;
  const digits = value.toString().split("")

  // console.log(parseInt(digits.at(1)!));


  return (
    // <div className="flex justify-center items-center">
    //     {
    //       Array.from(Array(digits).keys()).map((i) => {
    //         return <Digit value={i} key={i} />
    //       })
    //     }
    // </div>
    <Digit value={parseInt(digits.at(0)!)} />
  )
}

const Digit = ({value} : {value : number}) => {
    type SegmentsType = {
      [key: number]: {
        a: boolean;
        b: boolean;
        c: boolean;
        d: boolean;
        e: boolean;
        f: boolean;
        g: boolean;
      };
    };

  // 7 Segment
  const Segments : SegmentsType = {
    0: {
      a: true,
      b: true,
      c: true,
      d: true,
      e: true,
      f: true,
      g: false,
    },
    1: {
      a: false,
      b: true,
      c: true,
      d: false,
      e: false,
      f: false,
      g: false,
    },
    2: {
      a: true,
      b: true,
      c: false,
      d: true,
      e: true,
      f: false,
      g: true,
    },
    3: {
      a: true,
      b: true,
      c: true,
      d: true,
      e: false,
      f: false,
      g: true,
    },
    4: {
      a: false,
      b: true,
      c: true,
      d: false,
      e: false,
      f: true,
      g: true,
    },
    5: {
      a: true,
      b: false,
      c: true,
      d: true,
      e: false,
      f: true,
      g: true,
    },
    6: {
      a: true,
      b: false,
      c: true,
      d: true,
      e: true,
      f: true,
      g: true,
    },
    7: {
      a: true,
      b: true,
      c: true,
      d: false,
      e: false,
      f: false,
      g: false,
    },
    8: {
      a: true,
      b: true,
      c: true,
      d: true,
      e: true,
      f: true,
      g: true,
    },
    9: {
      a: true,
      b: true,
      c: true,
      d: true,
      e: false,
      f: true,
      g: true,
    },
  };

  return (
    // <div className="flex gap-4 justify-beteen w-full h-full items-center">
    //   <div className="flex flex-col">
    //     <Segment active={Segments[value].e} vertical />
    //     <Segment active={Segments[value].f} vertical />
    //   </div>
    //   <div className="flex flex-col">
    //     <Segment active={Segments[value].a} />
    //     <Segment active={Segments[value].g} />
    //     <Segment active={Segments[value].d} />
    //   </div>
    //   <div className="flex flex-col">
    //     <Segment active={Segments[value].b} vertical />
    //     <Segment active={Segments[value].c} vertical />
    //   </div>
    // </div>
    <div className="grid grid-cols-5">
      <div className="grid grid-flow-row grid-rows-[9]">
        <Segment active={Segments[value].e} vertical />
        <Segment active={Segments[value].f} vertical />
      </div>
      <div className="grid grid-flow-row grid-rows-[9] col-span-3">
        <Segment active={Segments[value].a} />
        <div className="row-span-3"></div>
        <Segment active={Segments[value].g} />
        <div className="row-span-3"></div>
        <Segment active={Segments[value].d} />
      </div>
      <div className="grid grid-flow-row grid-rows-[9]"></div>
    </div>
  );
}

const Segment = ({active, vertical=false} : {active : any, vertical?: boolean}) =>
{

  return (
    <div className={`flex justify-center items-center w-[15vw] aspect-square ${vertical ? "rotate-90" : ""}`}>
      <div
        className={`relative overflow-visible w-[10vw] aspect-square rotate-45 bg-green-500`}
      >
        <div
          className={`absolute ${
            active ? "bg-red-500" : "bg-black"
          } w-[30vw] aspect-square -rotate-45  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
        ></div>
      </div>
    </div>
  );
}
