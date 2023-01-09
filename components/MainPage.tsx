import React from 'react';
import Tag from '../components/Tag';
import WobbleEffect from '../components/WobbleEffect';
import { motion } from 'framer-motion';
import LightedButton from '../components/LightedButton';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import ScrollDown from './ScrollDown';

function MainPage({ showScrollDown = false }) {
  useEffect(() => {
    try {
      let canvas: any = document.getElementById('canvas');
      const el = document.createElement('script');
      el.src = '/canvas.js';
      document?.head.appendChild(el);
      if (canvas) {
        canvas.width =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth;

        canvas.height =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight;
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const router = useRouter();
  return (
    <div className="flex flex-col w-full  gap-[2px]">
      <div className="w-full z-0  text-white px-[20px] md:px-[50px] pt-[30px] pb-[10px] relative">
        <canvas
          className="absolute left-0 z-[-1] top-0 inline-block bg-background "
          id="canvas"
        ></canvas>
        <Tag tagName="<html>" />
        <div className="mt-[25%] mb-[20px] sm:my-8">
          <Tag tagName="<body>" stylesString="xl:ml-5" />
          <Tag tagName="<h1>" stylesString="xl:ml-8" />
          <WobbleEffect
            text="Hi,\nI'm Naman,\nSoftware Engineer"
            styleString="break-words ml-2 sm:ml-4 xl:ml-12"
          />
          <Tag tagName="<h1>" stylesString="xl:ml-8" />
          <motion.div
            className="sm:mt-4"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ delay: 2 }}
          >
            <Tag tagName="<p>" stylesString="xl:ml-8" />
            <span className="text-[#808080] text-[14px] sm:text-[18px] font-md mt-5 ml-2 sm:ml-4 xl:ml-12">
              Frontend Engineer / React Lover
            </span>
            <Tag tagName="<p/>" stylesString="xl:ml-8" />
          </motion.div>
          <Tag tagName="<body>" stylesString="xl:ml-5" />
        </div>
        <motion.div
          className="sm:mt-4"
          initial={{ opacity: 1, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ delay: 2 }}
        >
          <LightedButton
            text="Contact Me!"
            styleString="xl:ml-8 xl:mb-3"
            onClick={() => router.push('/contact')}
          />
        </motion.div>
        <Tag tagName="<html>" stylesString="mt-8 sm:mt-4" />
      </div>
      {showScrollDown && <ScrollDown />}
    </div>
  );
}

export default MainPage;
