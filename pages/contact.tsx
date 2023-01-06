import React, { useEffect, useRef, useState } from 'react';
import Layout from '../components/Layout';
import ProgressBar from '../components/ProgressBar';
import Tag from '../components/Tag';
import WobbleEffect from '../components/WobbleEffect';
import { motion } from 'framer-motion';
import { Input, Textarea, useToast } from '@chakra-ui/react';
import LightedButton from '../components/LightedButton';
import Map from '../components/Map';

function Contact() {
  const ref = useRef<any>(null);
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
  useEffect(() => {
    //@ts-ignore
    TagCanvas.Start('myCanvas', 'tags', {
      textColour: '#08FDD8',
      outlineColour: 'transparent',
      reverse: true,
      depth: 0.8,
      maxSpeed: 0.08,
      weight: true,
      activeCursor: 'pointer',
      pinchZoom: false,
      zoomEnabled: false,
      clickToFront: true,
      initial: [0.05, -0.1],
      shape: 'vring(0.3)',
      offsetY: -50,
      lock: 'x',
    });
  }, []);

  useEffect(() => {
    if (ref.current) {
      const width = ref.current.clientWidth;
      const height = ref.current.clientHeight;
      const canvas: any = document.getElementById('myCanvas');
      canvas.width = width - 10;
      canvas.height = height - 10;
    }
  }, [ref.current]);

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
    <Layout>
      <div className="w-full h-screen flex flex-col lg:flex-row text-white px-[20px] md:px-[50px] py-[30px] relative bg-background overflow-y-auto">
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
        <div className="w-full h-full lg:w-[50%]  bg-background flex items-center justify-center">
          <div
            id="myCanvasContainer"
            ref={ref}
            className="text-white flex w-full items-center justify-center h-[400px] sm:h-[600px]"
          >
            <canvas
              id="myCanvas"
              onWheel={(e) => e.preventDefault()}
              className=""
              width={500}
              height={500}
            >
              <ul id="tags">
                <li>
                  <a href="https://www.w3schools.com/html/" target="_blank">
                    HTML
                  </a>
                </li>
                <li>
                  <a href="https://www.w3schools.com/css/" target="_blank">
                    CSS
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.w3schools.com/js/js_es5.asp"
                    target="_blank"
                  >
                    ES5
                  </a>
                </li>
                <li>
                  <a href="https://www.typescriptlang.org/" target="_blank">
                    TypeScript
                  </a>
                </li>
                <li>
                  <a href="https://restfulapi.net/" target="_blank">
                    REST
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.w3schools.com/js/js_json_intro.asp"
                    target="_blank"
                  >
                    JSON
                  </a>
                </li>
                <li>
                  <a href="https://reactjs.org/" target="_blank">
                    React Js
                  </a>
                </li>
                <li>
                  <a href="https://nextjs.org/" target="_blank">
                    Next Js
                  </a>
                </li>
                <li>
                  <a href="https://graphql.org/" target="_blank">
                    GraphQL
                  </a>
                </li>
                <li>
                  <a href="https://chakra-ui.com/" target="_blank">
                    Chakra UI
                  </a>
                </li>
                <li>
                  <a
                    href="https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/"
                    target="_blank"
                  >
                    React Query
                  </a>
                </li>
                <li>
                  <a href="https://v5.reactrouter.com/" target="_blank">
                    React Router
                  </a>
                </li>
                <li>
                  <a href="https://nodejs.org/en/" target="_blank">
                    Node JS
                  </a>
                </li>
                <li>
                  <a href="https://git-scm.com/" target="_blank">
                    Git
                  </a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" target="_blank">
                    Tailwind CSS
                  </a>
                </li>
                <li>
                  <a
                    href="https://redux.js.org/introduction/getting-started"
                    target="_blank"
                  >
                    Redux
                  </a>
                </li>
                <li>
                  <a href="https://www.npmjs.com/" target="_blank">
                    npm
                  </a>
                </li>
                <li>
                  <a href="https://yarnpkg.com/" target="_blank">
                    yarn
                  </a>
                </li>
              </ul>
            </canvas>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
