import { Button } from '@chakra-ui/react';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import Loading from '../components/Loading';
import Tag from '../components/Tag';
import WobbleEffect from '../components/WobbleEffect';
import oscilate from '../components/canvas';

export default function Home() {
  return (
    <Layout>
      <div className="w-full h-screen  text-white px-[20px] md:px-[50px] py-[30px] ">
        <Tag tagName="<html>" />
        <div className="my-[35%] sm:my-8">
          <Tag tagName="<body>" stylesString="xl:ml-5" />
          <Tag tagName="<h1>" stylesString="xl:ml-8" />
          <WobbleEffect
            text="Hi,\nI'm Naman,\nSoftware Engineer"
            styleString="break-words ml-2 sm:ml-4 xl:ml-12"
          />
          <Tag tagName="<h1>" stylesString="xl:ml-8" />
          <div className="sm:my-8">
            <Tag tagName="<p>" stylesString="xl:ml-8" />
            <span className="text-[#808080] text-[14px] sm:text-[18px] font-md mt-5 ml-2 sm:ml-4 xl:ml-12">
              Frontend Engineer / React Lover
            </span>
            <Tag tagName="<p/>" stylesString="xl:ml-8" />
          </div>
          <Tag tagName="<body>" stylesString="xl:ml-5" />
        </div>
        <Tag tagName="<html>" />
      </div>
    </Layout>
  );
}
