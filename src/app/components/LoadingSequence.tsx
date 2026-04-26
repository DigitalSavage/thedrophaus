import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const imgLogo = "/images/logo.png";

interface LoadingSequenceProps {
  onComplete: () => void;
}

export function LoadingSequence({ onComplete }: LoadingSequenceProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Pulsing Green Circle */}
        <div className="relative">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-32 h-32 rounded-full bg-[#DBEC62] blur-3xl"></div>
          </motion.div>

          {/* Logo */}
          <motion.div
            className="relative z-10"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <img src={imgLogo} alt="The Drop Haus" className="w-24 h-24" />
          </motion.div>
        </div>

        {/* Loading Text */}
        <motion.div
          className="absolute bottom-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-[#DBEC62] uppercase tracking-[0.3em] text-sm font-bold mb-4 text-center">
            Initializing Drop Sequence
          </p>
          
          {/* Progress Bar */}
          <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#DBEC62] rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </motion.div>

        {/* Glitch Effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-10"
          animate={{
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 0.2,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(219,236,98,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(219,236,98,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
