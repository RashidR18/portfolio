import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function Hero() {
  const { isDark } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center pt-20 overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-black text-white" : "bg-gray-50 text-black"
      }`}
    >
      {/* Background animation */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 ${
            isDark ? "bg-blue-500" : "bg-blue-300"
          }`}
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute bottom-20 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 ${
            isDark ? "bg-purple-500" : "bg-purple-300"
          }`}
        ></motion.div>
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-4xl"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className={`inline-block px-4 py-2 rounded-full border font-medium text-sm transition-colors ${
            isDark
              ? "border-blue-500/50 text-blue-400"
              : "border-blue-600/50 text-blue-600"
          }`}>
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight"
        >
          Hi, I'm Rashid Ali 👋
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className={`text-xl md:text-2xl mb-8 leading-relaxed ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          A passionate <span className="text-blue-400 font-semibold">MERN Stack Developer</span> building{" "}
          <span className="text-purple-400 font-semibold">scalable web applications</span> with modern technologies
        </motion.p>

        <motion.p
          variants={itemVariants}
          className={`text-lg mb-12 max-w-2xl mx-auto ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Specializing in React, Node.js, MongoDB, and Express. I create intuitive, responsive, and performance-optimized web solutions.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-3 border-2 border-blue-500 rounded-lg font-semibold transition-colors duration-300 ${
              isDark
                ? "text-blue-400 hover:bg-blue-500/10"
                : "text-blue-600 hover:bg-blue-50"
            }`}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center"
          >
            <svg
              className={`w-6 h-6 ${isDark ? "text-gray-400" : "text-gray-500"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
