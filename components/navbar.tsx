"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,

  NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";

import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import { motion } from "framer-motion";
import { NavMenu } from "./navMenu";

export const Navbar = () => {
  const [dateHovered, setDateHovered] = useState(false);

  return (
    <NextUINavbar
      maxWidth="full"
      className="absolute bg-transparent bg-opacity-0 text-default px-[3vw] py-[1vw]"
      isBlurred={false}
    >
      <NavbarContent
        className="lg:text-[3vw] md:text-[4vw] sm:text-[5vw] text-[6vw] text-center font-medium"
        justify="start"
      >
        ABI Timer
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Button
            className="bg-[#2b2e3a] rounded-full uppercase hover:bg-[#0016ec] overflow-hidden"
            onMouseEnter={() => {
              setDateHovered(true);
            }}
            onMouseLeave={() => {
              setDateHovered(false);
            }}
          >
            <motion.div
              animate={{
                width: dateHovered ? "auto" : 0,
                x: dateHovered ? 0 : -50,
              }}
            >
              <FaArrowRightLong />
            </motion.div>
            <motion.div>RAINBOW</motion.div>

            <motion.div
              animate={{
                // opacity: dateHovered ? 0 : 1,
                scale: dateHovered ? 0 : 1,
                width: dateHovered ? 0 : "auto",
              }}
            >
              {/* <GoDotFill /> */}
            </motion.div>
          </Button>
        </NavbarItem>

        <NavbarItem>
          <NavMenu/>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
