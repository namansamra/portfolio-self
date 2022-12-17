import React from 'react';
import Layout from '../components/Layout';
import ProgressBar from '../components/ProgressBar';
import Tag from '../components/Tag';
import WobbleEffect from '../components/WobbleEffect';
import { motion } from 'framer-motion';
import { Input, Textarea } from '@chakra-ui/react';
import LightedButton from '../components/LightedButton';

function Contact() {
  return (
    <Layout>
      <div className="w-full h-screen flex flex-col lg:flex-row text-white px-[20px] md:px-[50px] py-[30px] relative bg-background overflow-y-scroll">
        <div className="flex flex-col gap-2  min-w-[50%] lg:mr-10 mb-10">
          <Tag tagName="<html>" />
          <Tag tagName="<body>" stylesString="xl:ml-5" />
          <div className="flex flex-col">
            <div className="mt-[10%] mb-[10px] sm:my-2">
              <Tag tagName="<h1>" stylesString="xl:ml-8" />
              <WobbleEffect
                text="Contact Me"
                styleString="text-cyan break-words ml-2 sm:ml-4 xl:ml-12"
              />
              <Tag tagName="</h1>" stylesString="xl:ml-6" />
            </div>
            <Tag tagName="<p>" stylesString="xl:ml-5" />
            <div className="flex text-[12px] sm:text-[14px] font-medium max-w-[600px] flex-col mt-1 ml-2 sm:ml-4 xl:ml-12 xl:text-[16px] gap-4">
              <p>
                I’m interested in freelance opportunities – especially ambitious
                or large projects. However, if you have other request or
                question, don’t hesitate to use the form.
              </p>
            </div>
            <Tag tagName="</p>" stylesString="xl:ml-5" />
          </div>
          <Tag tagName="<form>" stylesString="xl:ml-5" />
          <div className="flex flex-col gap-2 mt-1 ml-2 sm:ml-4 xl:ml-12">
            <div className="flex flex-row gap-2 items-center">
              <Input
                placeholder="Name"
                className="bg-[#2b2b2b] border-none rounded-sm text-[#8d8d8d] h-[50px] w-full"
                _focusVisible={{}}
              />
              <Input
                placeholder="Email"
                className="bg-[#2b2b2b] border-none rounded-sm text-[#8d8d8d] h-[50px] w-full"
                _focusVisible={{}}
              />
            </div>
            <Input
              placeholder="Subject"
              className="bg-[#2b2b2b] border-none rounded-sm text-[#8d8d8d] h-[50px] w-full"
              _focusVisible={{}}
            />
            <Textarea
              placeholder="Message"
              className="bg-[#2b2b2b] border-none rounded-sm text-[#8d8d8d] min-h-[150px] w-full"
              _focusVisible={{}}
            />
            <LightedButton text="Send Message" styleString="mt-2" />
          </div>
          <Tag tagName="</form>" stylesString="xl:ml-5" />
          <Tag tagName="</body>" stylesString="mt-2 xl:ml-5" />
          <Tag tagName="</html>" stylesString="mt-2" />
        </div>
        <div className="flex w-full"> </div>
      </div>
    </Layout>
  );
}

export default Contact;
