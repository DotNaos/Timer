"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,

  NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";

import { FaArrowRightLong } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { useState } from "react";
import { motion } from "framer-motion";
import { MenuToggle } from "./menuToggle";
import {  NavMenu } from "./navMenu";
import { ThemeSwitch } from "./theme-switch";

export const Navbar = () => {

  return (
    <NextUINavbar
      maxWidth="full"
      className="absolute bg-transparent bg-opacity-0 text-default-foreground py-[2vh] portrait:py-[2vw]  overflow-x-clip"
      isBlurred={false}
    >
      <NavbarContent
        justify="center"
        className="flex items-center justify-center text-center"
      >
        <NavbarItem className="">
          <div className="border-default bg-default-50 border-2 rounded-full flex content-center p-2">
            <ThemeSwitch />
          </div>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
