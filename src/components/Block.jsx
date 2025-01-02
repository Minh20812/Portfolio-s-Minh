import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const block = {
  rest: { scale: 0.5, y: 50, opacity: 0 },
  load: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 3,
      stiffness: 400,
      damping: 50,
    },
  },
  exit: { scale: 0.5, y: 50, opacity: 0 },
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={block}
      initial="rest"
      animate="load"
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

export default Block;
