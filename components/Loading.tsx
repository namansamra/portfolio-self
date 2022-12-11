import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
const Progress = () => {
  return (
    <div className="flex items-center w-[500px] h-[1px] bg-white rounded-3xl overflow-hidden mt-5 relative">
      <div className="w-full h-full overflow-hidden bg-gradient-to-r from-[#28edcf] via-[#FD2145] to-[#FD2155]"></div>
      <div className="w-full h-full bg-black absolute top-0 right-0 animate-processing"></div>
    </div>
  );
};

function Loading({ isLoading = false }) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="key"
          initial={{ x: -1000 }}
          animate={{
            x: [-1000, 0],
            transition: {
              duration: 0.8,
            },
          }}
          exit={{
            x: 1000,
            transition: {
              duration: 0.8,
            },
          }}
        >
          <div className="flex flex-col z-100 h-[100vh] bg-background w-full items-center justify-center">
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
