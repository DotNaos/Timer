"use client";
import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./menuToggle";
import { MenuItem } from "./menuItem";
import { Button } from "@nextui-org/button";


export const NavMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <div className="relative w-10 h-10 overflow-visible bg-red-500">
      <motion.div
        className="absolute right-0 top-0  bg-emerald-400  h-full aspect-square"
        animate={{
          width: isOpen ? "100%" : "100vh",
          height: isOpen ? "100%" : "100vh",
        }}
        transition={{
          duration: 2.5,
          type: "spring",
          damping: 50,
          bounce: 10
        }}
        onClick={toggleOpen}
      />
    </div>
  );
};


const Navigation = () => {
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
      opacity: 1
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
      opacity: 0
    },
  };
  const styles = [
    {
      "Rainbow" : 10
    },
    {
      "casion" : 10
    }
  ]
  return (
    <motion.ul variants={variants}

    className="absolute text-8xl text-white flex-col flex justify-center items-center ">
      {styles.map((i, key) => (
        <a key={i} href="/casino">Casino</a>
      ))}
    </motion.ul>
  );


}
