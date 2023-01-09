import React, { useEffect, useRef, useState } from 'react';
import ProgressBar from '../components/ProgressBar';
import Tag from '../components/Tag';
import WobbleEffect from '../components/WobbleEffect';
import { motion } from 'framer-motion';
import { Input, Textarea, useToast } from '@chakra-ui/react';
import LightedButton from '../components/LightedButton';
import Map from '../components/Map';
import ScrollDown from './ScrollDown';

function ContactPage({ showScrollDown = false }) {
  const initialState = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState(initialState);
  const setField = (field: string, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };
  const toast = useToast();

  const submitHandler = async () => {
    if (Object.keys(formState).some((i) => (formState as any)[i].length == 0)) {
      toast({
        title: 'Please fill the form',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
        variant: 'subtle',
      });
      return;
    }
    setLoading(true);
    try {
      const formdata = new FormData();
      Object.keys(formState).forEach((key) => {
        formdata.append(key, (formState as any)[key]);
      });
      await fetch('https://formbold.com/s/3NnY3', {
        method: 'POST',
        body: formdata,
      });
      toast({
        title: 'Response submitted successfully!',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
        variant: 'subtle',
      });
      setFormState({ ...initialState });
    } catch (error) {}
    setLoading(false);
  };
  return (
    <div className="w-full flex flex-col lg:flex-row text-white px-[20px] md:px-[50px] py-[30px] bg-background">
      <div className="flex flex-col gap-2 w-full  lg:w-[50%] lg:mr-10 mb-10">
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
              I’m interested in freelance opportunities. However, if you have
              other request or question, don’t hesitate to use the form.
            </p>
          </div>
          <Tag tagName="</p>" stylesString="xl:ml-5" />
        </div>
        <Tag tagName="<form>" stylesString="xl:ml-5" />
        <div className="flex flex-col gap-2 mt-1 ml-2 sm:ml-4 xl:ml-12">
          <div className="flex flex-row gap-2 items-center">
            <Input
              placeholder="Name"
              value={formState.name}
              className="bg-[#2b2b2b] border-none rounded-sm text-[#8d8d8d] h-[50px] w-full"
              _focusVisible={{}}
              name="name"
              onChange={(e) => setField('name', e.target.value)}
            />
            <Input
              placeholder="Email"
              value={formState.email}
              className="bg-[#2b2b2b] border-none rounded-sm text-[#8d8d8d] h-[50px] w-full"
              _focusVisible={{}}
              name="email"
              onChange={(e) => setField('email', e.target.value)}
            />
          </div>
          <Input
            placeholder="Subject"
            value={formState.subject}
            className="bg-[#2b2b2b] border-none rounded-sm text-[#8d8d8d] h-[50px] w-full"
            _focusVisible={{}}
            name="subject"
            onChange={(e) => setField('subject', e.target.value)}
          />
          <Textarea
            placeholder="Message"
            value={formState.message}
            className="bg-[#2b2b2b] border-none rounded-sm text-[#8d8d8d] min-h-[150px] w-full"
            _focusVisible={{}}
            name="message"
            onChange={(e) => setField('message', e.target.value)}
          />
          <LightedButton
            text="Send Message"
            onClick={submitHandler}
            styleString="mt-2"
            isLoading={loading}
          />
        </div>
        <Tag tagName="</form>" stylesString="xl:ml-5" />
        <Tag tagName="</body>" stylesString="mt-2 xl:ml-5" />
        <Tag tagName="</html>" stylesString="mt-2" />
      </div>
      <Map />
    </div>
  );
}

export default ContactPage;
