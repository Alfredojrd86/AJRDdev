import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

let MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-2">
      <MotionLink
        href="/"
        // className="flex items-center justify-center rounded-full w-24 h-18  bg-dark  text-white dark:border-1 dark:border-solid dark:border-dark"
        className="px-3 py-1 shadow-lg shadow-gray-500/50 bg-dark text-white rounded-lg text-[15px] cursor-pointer active:scale-[.97]"
      >
        {/* <img
          src="/NexTemp-logo.png"
          alt="Logo"
          className="w-full h-full object-contain rounded-full w-10 h-10 py-2 px-2"
        /> */}
        <span className="text-2xl font-bold text-white">AR<span className="text-xs text-white">dev</span> </span>

      </MotionLink>
    </div>
  );
};

export default Logo;
