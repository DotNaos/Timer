import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
export const NavMenu = () => {
  return (
    <motion.nav>
      <motion.div
        variants={{
          open: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.3,
              ease: "easeInOut",
            },
          },
          closed: {
            opacity: 0,
            x: "-100%",
            transition: {
              duration: 0.3,
              ease: "easeInOut",
            },
          },
        }}
      >
        <motion.div className="absolute top-[1vw] right-[1vw] text-[5vw] text-default cursor-pointer">
          <FaXmark />
        </motion.div>
        <motion.div className="flex flex-col justify-center items-center h-screen w-screen">
          <motion.div className="text-[10vw] text-default font-medium">
            ABI Timer
          </motion.div>
          <motion.div className="text-[5vw] text-default font-medium">
            Rainbow
          </motion.div>
          <motion.div className="text-[5vw] text-default font-medium">
            Snow
          </motion.div>
          <motion.div className="text-[5vw] text-default font-medium">
            Fireworks
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};
