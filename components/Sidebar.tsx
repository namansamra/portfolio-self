import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { RiCloseLine } from 'react-icons/ri';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useMainContext } from '../utils/context';

interface Props {}

const links = [
  {
    id: 1,
    link: '/about',
    title: 'About',
  },
  {
    id: 2,
    link: '/myskills',
    title: 'My Skills',
  },
  {
    id: 3,
    link: '/work',
    title: 'Work',
  },
  {
    id: 4,
    link: '/contact',
    title: 'Contact',
  },
];

const connects = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/naman-samra-17ns12/',
    icon: <AiFillLinkedin />,
  },
  {
    title: 'Github',
    href: 'https://github.com/namansamra',
    icon: <AiOutlineGithub />,
  },
];
function Sidebar({}: Props) {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const { showLoader, setShowLoader } = useMainContext();
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    if (window?.innerWidth > 1280) {
      setShowMenu(true);
    }

    let onceOpenCloseOnSmallScreenCommingFromBigScreen = false;
    const setMenuStateFun = (e: any) => {
      if (e?.target?.innerWidth) {
        if (e.target.innerWidth >= 1280) {
          onceOpenCloseOnSmallScreenCommingFromBigScreen = false;
          setShowMenu(true);
        }

        // if user firstly on bigger screen then get to small screen so menu should be closed now by default on small screen
        if (
          e.target.innerWidth <= 1279 &&
          !onceOpenCloseOnSmallScreenCommingFromBigScreen
        ) {
          setShowMenu(true);
          setShowMenu(false);
          onceOpenCloseOnSmallScreenCommingFromBigScreen = true;
        }
      }
    };
    window.addEventListener('resize', setMenuStateFun);
    return () => window.removeEventListener('resize', setMenuStateFun);
  }, []);

  useEffect(() => {
    setScreenWidth(window?.innerWidth);
  });

  return (
    <>
      <AnimatePresence>
        {showMenu && (
          <motion.div
            key="someKey"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full flex z-[10] flex-col fixed left-0 bottom-0 top-0 right-0 bg-sideMenuBg xl:sticky  xl:right-0 xl:w-[170px] text-cyan transition-all ease-out duration-700 items-center xl:block border-r-[1px] border-black`}
          >
            <div
              className="flex flex-col bg-black w-full p-4 py-8 items-center justify-center"
              onClick={() => router.push('/')}
            >
              <div className="text-[100px] font-bold text-brick text-shadow-behind-left leading-[1] cursor-pointer">
                N
              </div>
              <span className="text-lg text-white font-bold">Naman</span>
              <span className="text-[12px] text-[#a5a5a5] text-center">
                Software Developer
              </span>
            </div>
            <div
              className="flex items-center justify-center absolute top-4 right-4 text-2xl xl:hidden text-white z-10"
              onClick={() => setShowMenu(false)}
            >
              <motion.span
                whileTap={{
                  rotate: 90,
                  scale: 0.75,
                }}
              >
                <RiCloseLine />
              </motion.span>
            </div>
            <div className="flex flex-col w-full items-center text-center">
              {links.map((item, i) => {
                return (
                  <div
                    className={
                      'flex text-center items-center font-medium justify-center p-4 border-t-[1px] border-[#282828] w-full text-[#909096] hover:text-cyan cursor-pointer ' +
                      (i + 1 == links.length
                        ? 'border-b-[1px] border-[#282828]'
                        : '')
                    }
                    onClick={() => {
                      setShowLoader(true);
                      router.push(item.link);
                      if (screenWidth && screenWidth < 1280) {
                        setShowMenu(false);
                      }
                    }}
                    key={item.id}
                  >
                    {item.title}
                  </div>
                );
              })}
            </div>

            <div className="flex gap-4 items-center justify-center mt-5 text-[#ababab] cursor-pointer text-[20px] ">
              {connects.map((ele) => {
                return (
                  <Link
                    href={ele.href}
                    target="_blank"
                    className="hover:text-cyan"
                    key={ele.href}
                  >
                    {ele.icon}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="flex items-center justify-center fixed top-4 right-4 text-2xl xl:hidden text-white z-[1] cursor-pointer"
        onClick={() => setShowMenu(true)}
      >
        <motion.span
          whileTap={{
            rotate: 90,
            scale: 0.75,
          }}
        >
          <RxHamburgerMenu />
        </motion.span>
      </div>
    </>
  );
}

export default Sidebar;
