import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter"; // For dynamic profession effect

const Hero = () => {
  return (
    <div className=" h-screen flex flex-col justify-center items-center text-white px-4 md:px-8 lg:px-12 pt-10 pb-2">
      
      {/* Avatar Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mb-4"
      >
        <img
          src="/young.avif" // Replace with your avatar image URL
          alt="Avatar"
          className="rounded-full w-32 h-32 object-cover md:w-40 md:h-40 lg:w-48 lg:h-48"
        />
      </motion.div>

      {/* Main Content Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-xl mx-auto"
      >
        <h1 className="text-4xl font-extrabold mb-2 tracking-wide md:text-5xl">
          Hi, I'm <span className="text-indigo-500">Poornima Bajpai</span>
        </h1>
        
        {/* Dynamic Typing Effect */}
        <p className="text-2xl font-semibold mb-2 md:text-3xl">
          I am a{" "}
          <span className="text-indigo-400">
            <Typewriter
              words={[
                "Software Developer",
                "Frontend Developer",
                "Python Programmer",
                "Java Programmer",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </p>

        {/* Short Description */}
        <p className="text-base mb-4 max-w-md mx-auto md:text-lg">
        Master seamless frontend development with modern JavaScript frameworks, responsive design, and optimized performance. 
        </p>

        {/* Download Resume Button */}
        <motion.a
          href="/AnuragYadavResume.pdf" // Replace with the actual path to your resume
          download="AnuragYadavResume.pdf"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-indigo-600 hover:bg-indigo-800 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300 shadow-lg transform hover:translate-y-[-2px]"
        >
          Download Resume
        </motion.a>
      </motion.div>

      {/* Social Media Icons */}
      <motion.div
        className="flex space-x-4 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <a href="https://github.com/bajpaipoornima" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl hover:text-gray-400 transition-colors duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/poornima-bajpai-3b3801227/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl hover:text-blue-400 transition-colors duration-300" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-2xl hover:text-blue-300 transition-colors duration-300" />
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
