import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import LinkedIn from '../public/assets/linkedin2.png';
import Covid from '../public/assets/covid.png';
import Hangman from '../public/assets/hangman.png';
import Streamy from '../public/assets/streamy.png';
import Chat from '../public/assets/chat.png';
import AutoRite from '../public/assets/autorite.png';
import WobbleEffect from '../components/WobbleEffect';
import { useMainContext } from '../utils/context';

const images = [
  {
    id: 0,
    name: 'LinkedIn Clone',
    img: LinkedIn,
    techUsed: 'Reactjs, Apollo GraphQL, MongoDB, Chakra UI',
    about:
      'This application is LinkedIn clone. User can login using his google account. It has basic features of create post, like post, comment on a post and save post. It is developed with Reactjs, Chakra UI, Apollo GraphQl and MongoDB.',
    url: 'https://github.com/namansamra/linkedin-clone-FE',
  },
  {
    id: 5,
    img: AutoRite,
    name: 'AutoRite',
    techUsed: 'Reactjs, ChakraUI, Tailwind, Quill Editor, Nodejs, Express',
    about:
      'It is an auto blog generating webapp. It generates article on the basis of keyword and location entered by the user with the help of Open AI. User can integrate his WordPress website and can directly publish a blog from here. Quill editor is used so that user can edit the blog and headings.',
    url: 'https://github.com/namansamra/Autorite',
  },
  {
    id: 1,
    img: Covid,
    name: 'Covid Tracker',
    techUsed: 'Reactjs, Chartjs',
    about:
      'This application provides real time information about Covid-19 cases for any country . Front end is developed using React js and is fully responsive. Bar charts are shown to demonstrate the infected, death and recovered cases using react-chartjs.',
    url: 'https://github.com/namansamra/Covid19-WebApp',
  },

  {
    id: 3,
    img: Streamy,
    name: 'Streamy',
    techUsed: 'Reactjs, Express, MongoDB, CSS3, Firebase',
    about:
      'It is web based streaming platform built using MERN Stack Users can view the streams which are currently live or can Create their own stream and stream it using OBS. Redux is used for state management Authentication is added using firebase and authorization using JWT Node-media-server is used as a dependency for streaming which is hosted on GCP VM',
    url: 'https://github.com/namansamra/streamy2',
  },
  {
    id: 4,
    img: Chat,
    name: 'ChatBord',
    techUsed: 'Reactjs, Socket.io, Express',
    about:
      'This application is a chat application. User can chat with friends by creating rooms. Front end is developed using React js . Socket.io library is used for communication between client and browser. Back end is handled using Node js and express js.',
    url: 'https://github.com/namansamra/ChatBord-App',
  },

  {
    id: 2,
    img: Hangman,
    name: 'Hangman',
    techUsed: 'Html, CSS, Javascript',
    about:
      'This is a word guessing game. It is made using HTML, CSS, JavaScript. Audio sounds are added for better user experience.',
    url: 'https://github.com/namansamra/NewsOn-App',
  },
];

function WorkPage({ showScrollDown = false }) {
  const ref = useRef<any>(null);
  const [screenWidth, setScreenWidth] = useState(0);
  const { showLoader } = useMainContext();
  useEffect(() => {
    if (ref.current) {
      setScreenWidth(ref?.current?.clientWidth);
    }
  }, [ref?.current]);
  return (
    <div className="w-full flex flex-col text-white bg-background" ref={ref}>
      {images.map((img, i) => {
        return (
          <motion.div
            key={i + img.name}
            className={
              'flex flex-col lg:flex-row justify-between w-full items-center ' +
              (i % 2 == 0 ? 'lg:flex-row-reverse' : '')
            }
            whileInView={{
              x: i % 2 == 0 ? [-screenWidth, 0] : [screenWidth, 0],
            }}
            viewport={{ once: true, amount: 'all' }}
            transition={{
              duration: 1,
              ...(showLoader ? { delay: 1.2 } : {}),
            }}
          >
            <div className="flex flex-col gap-4 w-full p-6 lg:max-w-[50%]">
              <WobbleEffect
                text={img.name}
                styleString="xl sm:text-2xl lg:!text-5xl text-cyan mb-2 lg:mb-6"
                asLink={true}
                url={img.url}
              />
              <h2 className="text-xl lg:text-2xl font-bold text-white">
                {img.techUsed}
              </h2>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 4 }}
                className="text-sm lg:text-base"
              >
                {img.about}
              </motion.span>
            </div>
            <motion.img
              initial={{
                scale: 0,
              }}
              animate={{
                scale: 1,
              }}
              transition={{ duration: 1 }}
              src={img.img.src}
              alt="its"
              height={'100%'}
              width={'500px'}
              className="flex-1"
            />
          </motion.div>
        );
      })}
      <div className="text-sm text-grey my-4 py-4 text-center w-full bg-background">
        All above are personal projects
      </div>
    </div>
  );
}

export default WorkPage;
