import React from 'react';
import { motion } from 'framer-motion';
function ProgressBar({
  titleText = 'React js',
  barColor = '#08FDD8',
  progress = 100,
}: {
  titleText?: string;
  barColor?: string;
  progress?: number;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[18px] text-white">{titleText}</span>
      <div className={`h-[2px] bg-[#373737] w-full relative`}>
        <motion.div
          className={`absolute left-0 h-full w-0`}
          style={{ backgroundColor: barColor }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 2 }}
        ></motion.div>
      </div>
    </div>
  );
}

export default ProgressBar;
