import { motion } from 'framer-motion';

const atomVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      duration: 1,
      repeat: Infinity,
      repeatType: "reverse" 
    }
  }
};

const electronVariants = {
  initial: { rotate: 0 },
  animate: { 
    rotate: 360,
    transition: { 
      duration: 2,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div 
          className="relative w-32 h-32 mx-auto mb-8"
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="absolute inset-0 border-4 border-blue-500 rounded-full"
            variants={atomVariants}
          />
          <motion.div 
            className="absolute top-0 left-1/2 w-4 h-4 -ml-2 bg-red-500 rounded-full"
            variants={electronVariants}
            style={{ originY: "5rem" }}
          />
          <motion.div 
            className="absolute top-0 left-1/2 w-4 h-4 -ml-2 bg-green-500 rounded-full"
            variants={electronVariants}
            style={{ originY: "5rem", rotate: 120 }}
          />
          <motion.div 
            className="absolute top-0 left-1/2 w-4 h-4 -ml-2 bg-yellow-500 rounded-full"
            variants={electronVariants}
            style={{ originY: "5rem", rotate: 240 }}
          />
        </motion.div>
        <motion.h2 
          className="text-2xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          Loading Periodic Table
        </motion.h2>
      </div>
    </div>
  );
}

