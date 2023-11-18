import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import CountdownClock from "@/components/Clock";
import CountdownApp from "@/components/test";
import { motion } from "framer-motion";

export default function Home() {



  return (
    <div className="w-screen h-screen flex justify-center items-center overflow-hidden">
      <CountdownClock />
      {/* <CountdownApp/> */}


    </div>
  );
}
