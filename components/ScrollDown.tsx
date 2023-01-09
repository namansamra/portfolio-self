import React from 'react';
import { BsArrowDownShort } from 'react-icons/bs';
import { motion } from 'framer-motion';
function ScrollDown() {
  return (
    <div className="flex justify-between !text-grey text-xs font-medium w-full px-4 z-10">
      <div className="flex flex-col gap-2">
        <motion.span
          animate={{ y: [0, 10, 0], transition: { repeat: Infinity } }}
          style={{ writingMode: 'vertical-rl' }}
        >
          scroll down
        </motion.span>
        <BsArrowDownShort />
      </div>
      <div className="flex flex-col gap-2">
        <motion.span
          animate={{ y: [0, 10, 0], transition: { repeat: Infinity } }}
          style={{ writingMode: 'vertical-rl' }}
        >
          scroll down
        </motion.span>
        <BsArrowDownShort />
      </div>
    </div>
  );
}

export default ScrollDown;
