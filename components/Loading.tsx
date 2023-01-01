import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useMainContext } from '../utils/context';
const Progress = () => {
  return (
    <div className="flex items-center w-[300px] sm:w-[500px] h-[1px] bg-white rounded-3xl overflow-hidden mt-5 relative">
      <div className="w-full h-full overflow-hidden bg-gradient-to-r from-[#28edcf] via-[#FD2145] to-[#FD2155]"></div>
      <div className="w-full h-full bg-black absolute top-0 right-0 animate-processing"></div>
    </div>
  );
};

function Loading() {
  const { showLoader, setShowLoader } = useMainContext();

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(new Boolean(false).valueOf());
    }, 1000);
  }, [showLoader]);

  return (
    <AnimatePresence initial={false}>
      {showLoader && (
        <motion.div
          key="key"
          initial={{ x: 0 }}
          animate={{ x: 0 }}
          exit={{
            x: [0, 1000],
            transition: {
              duration: 1,
            },
          }}
          className="w-full h-screen flex flex-col lg:flex-row text-white px-[20px] md:px-[50px] py-[30px] bg-background fixed top-0 z-9999"
        >
          <div className="flex flex-col z-100 h-[100vh] bg-background w-full items-center justify-center p-2">
            <div className="text-[70px] font-bold text-brick text-shadow-behind-after leading-[1] cursor-pointer">
              N
            </div>
            <span className="text-white text-sm font-bold">Naman</span>
            <span className="text-grey text-xs mt-2">Naman is thinking</span>
            <Progress />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loading;
