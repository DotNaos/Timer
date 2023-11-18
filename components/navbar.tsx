'use client';
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
} from "@/components/icons";

import { Logo } from "@/components/icons";
import { FaArrowRightLong } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { useState } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt4 } from "react-icons/hi";
export const Navbar = () => {

	const [dateHovered, setDateHovered] = useState(false);
	const [menuHovered, setMenuHovered] = useState(false);

  return (
    <NextUINavbar
      maxWidth="full"
      className="absolute bg-transparent bg-opacity-0 text-default px-[3vw] py-[1vw]"
			isBlurred={false}
    >
      <NavbarContent className="text-[2.5vw] text-center" justify="start">
        ABI Timer
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
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
            <motion.div>Pick Date</motion.div>

            <motion.div
              animate={{
                // opacity: dateHovered ? 0 : 1,
                scale: dateHovered ? 0 : 1,
                width: dateHovered ? 0 : "auto",
              }}
            >
              <GoDotFill />
            </motion.div>
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            className="bg-[#e4e6ef] rounded-full text-default hover:bg-white"
            onMouseEnter={() => {
              setMenuHovered(true);
            }}
            onMouseLeave={() => {
              setMenuHovered(false);
            }}
          >
            Menu
            <motion.div
              animate={{
                rotateZ: menuHovered ? 90 : 0,
                scale: menuHovered ? 1.25 : 1,
              }}
            >
              <HiMenuAlt4 />
            </motion.div>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
