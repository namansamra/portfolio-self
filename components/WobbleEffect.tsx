import React from 'react';
import { motion } from 'framer-motion';
import { useMainContext } from '../utils/context';

const sentence = {
  hidden: {
    opacity: 1,
    transition: {
      delay: 2,
      duration: 2,
      staggerChildren: 0.1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 2,
      duration: 2,
      staggerChildren: 0.1,
    },
  },
};

const letter: any = {
  hidden: {
    opacity: 0,
    y: 400,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
function WobbleEffect({
  text,
  styleString,
  asLink = false,
  url = '',
}: {
  text: string;
  styleString?: string;
  asLink?: boolean;
  url?: string;
}) {
  return (
    <motion.h3
      className={
        `text-[30px] sm:text-[42px] md:text-[80px] lg:text-[80px] xl:text-[100px]text-white font-bold leading-[1] ${
          asLink
            ? 'hover:border-b-2 hover:border-cyan hover:cursor-pointer w-max'
            : ''
        } ` + styleString
      }
      key="unique"
      variants={sentence}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      onClick={() => {
        if (asLink) {
          window?.open(url, '_blank');
        }
      }}
    >
      {text.split('\\n').map((line, i) => {
        let charSpans = line.split('').map((char, index) => {
          return (
            <motion.span
              key={char + '-' + index + i}
              variants={letter}
              className={`hover:text-cyan ${
                char == ' ' ? '' : 'inline-block'
              } hover:animate-rubberbandEffect`}
            >
              {char}
            </motion.span>
          );
        });
        return (
          <>
            {charSpans}
            <br />
          </>
        );
      })}
    </motion.h3>
  );
}

export default WobbleEffect;
