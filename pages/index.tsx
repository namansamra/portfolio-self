import Layout from '../components/Layout';
import Tag from '../components/Tag';
import WobbleEffect from '../components/WobbleEffect';
import { motion } from 'framer-motion';
import LightedButton from '../components/LightedButton';
import { useEffect } from 'react';
export default function Home() {
  useEffect(() => {
    let canvas: any = document.getElementById('canvas');

    const el = document.createElement('script');
    el.src = '/canvas.js';
    document?.head?.appendChild(el);

    canvas.width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    canvas.height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
  }, []);

  return (
    <Layout>
      <div className="w-full h-screen  text-white px-[20px] md:px-[50px] py-[30px] relative">
        <canvas
          className="absolute left-0 z-[-1] top-0 inline-block bg-background"
          id="canvas"
          // height={'261'}
          // width="1440"
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
        {/* <div className="cursor-pointer border-[1px] border-cyan bg-background text-cyan hover:text-background px-4 py-2 rounded-sm w-[200px] text-center font-md  hover:shadow-[inset_200px_0px_5px_0px_#08FDD8] duration-200 active:translate-y-1">
          Contact Me!
        </div> */}
        <motion.div
          className="sm:mt-4"
          initial={{ opacity: 1, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ delay: 2 }}
        >
          <LightedButton text="Contact Me!" styleString="xl:ml-8 xl:mb-3" />
        </motion.div>

        <Tag tagName="<html>" stylesString="mt-4" />
      </div>
    </Layout>
  );
}
