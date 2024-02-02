import * as React from "react";
import { motion } from "framer-motion";
import { FaGripLines } from "react-icons/fa6";
import { useState } from "react";
import { Button } from "@nextui-org/button";

export const MenuToggle = ({ toggle }: { toggle: any }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Button
      onClick={() => {
        setOpen(!isOpen);
        toggle();
      }}
      isIconOnly
      className="rounded-full absolute top-1/2 left-1/2"
      color="secondary"
      variant="shadow"
    >
      <motion.div animate={{
        rotate: isOpen ? 90 : 0,

      }}
      transition={{
        duration: 0.5,
        type: "spring"

      }}>
        <FaGripLines className="w-[2vw] h-[10-vw]" />
      </motion.div>
    </Button>
  );
};
