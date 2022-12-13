import Layout from '../components/Layout';
import Loading from '../components/Loading';
import Tag from '../components/Tag';
import WobbleEffect from '../components/WobbleEffect';
import { motion } from 'framer-motion';
export default function Home() {
  return (
    <Layout>
      <div className="w-full h-screen  text-white px-[20px] md:px-[50px] py-[30px] relative">
        <canvas
          className="absolute left-0 z-[-1] top-0 inline-block bg-background"
          id="canvas"
          width="414"
          height="896"
        ></canvas>
        <Tag tagName="<html>" />
        <div className="my-[35%] sm:my-8">
          <Tag tagName="<body>" stylesString="xl:ml-5" />
          <Tag tagName="<h1>" stylesString="xl:ml-8" />
          <WobbleEffect
            text="Hi,\nI'm Naman,\nSoftware Engineer"
            styleString="break-words ml-2 sm:ml-4 xl:ml-12"
          />
          <Tag tagName="<h1>" stylesString="xl:ml-8" />
          <div className="sm:mt-8">
            <Tag tagName="<p>" stylesString="xl:ml-8" />
            <span className="text-[#808080] text-[14px] sm:text-[18px] font-md mt-5 ml-2 sm:ml-4 xl:ml-12">
              Frontend Engineer / React Lover
            </span>
            <Tag tagName="<p/>" stylesString="xl:ml-8" />
          </div>
          <Tag tagName="<body>" stylesString="xl:ml-5" />
        </div>
        {/* <motion.div
          className="cursor-pointer border-[2px] border-cyan bg-background text-cyan hover:text-background hover:bg-cyan px-4 py-3 rounded-sm w-[200px] text-center font-bold xl:ml-8 xl:mb-3"
          whileHover={{}}
        >
          Contact Me!
        </motion.div> */}

        <Tag tagName="<html>" />
      </div>
    </Layout>
  );
}
