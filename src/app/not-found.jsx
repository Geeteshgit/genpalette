'use client';

import { motion } from 'framer-motion';
import { MdErrorOutline } from 'react-icons/md';
import Link from 'next/link';

const NotFound = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col flex-1 justify-center items-center text-center px-4 bg-[#FAFAFA]"
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-blue-500 text-6xl bg-blue-500/10 p-5 rounded-full"
        >
          <MdErrorOutline />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl sm:text-5xl font-semibold text-blue-500"
        >
          Page Not Found
        </motion.h1>

        <p className="text-base sm:text-lg font-light text-gray-600">
          {"The page you're looking for doesn't exist or has been moved."}
        </p>

        <Link
          href="/"
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Back to Home
        </Link>
      </div>
    </motion.main>
  );
};

export default NotFound;
