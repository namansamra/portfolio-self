import React from 'react';
import { motion } from 'framer-motion';

const sentence = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const letter = {
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
}: {
  text: string;
  styleString?: string;
}) {
  return (
    <motion.h3
      className={
        'text-[42px] md:text-[80px] lg:text-[80px] xl:text-[100px]text-white font-bold leading-[1] ' +
        styleString
      }
      key="unique"
      variants={sentence}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
    >
      {text.split('\\n').map((line, i) => {
        let charSpans = line.split('').map((char, index) => {
          return (
            <motion.span
              key={char + '-' + index + i}
              variants={{ ...letter }}
              className={`hover:text-cyan ${
                char == ' ' ? '' : 'inline-block'
              } hover:animate-rubberbandEffect`}
              onPointerMove={() => {
                //animate letters
                console.log('capture');
              }}
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
