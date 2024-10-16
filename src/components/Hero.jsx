import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter"; // For dynamic profession effect

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-primary h-screen flex flex-col justify-center items-center text-white px-6 md:px-12 lg:px-24">
      
      {/* Avatar Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mb-6"
      >
        <img
          src="/young.jpg" // Replace with your avatar image URL
          alt="Avatar"
          className="rounded-full w-40 h-40 object-cover md:w-48 md:h-48 lg:w-56 lg:h-56"
        />
      </motion.div>

      {/* Main Content Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-2xl mx-auto"
      >
        <h1 className="text-5xl font-extrabold mb-2 tracking-wide">
          Hi, I'm <span className="text-indigo-500">John Doe</span>
        </h1>
        
        {/* Dynamic Typing Effect */}
        <p className="text-3xl font-semibold mb-4">
          I am a{" "}
          <span className="text-indigo-400">
            <Typewriter
              words={[
                "Full Stack Web Developer",
                "Mobile Application Developer",
                "C++ Programmer",
                "DSA Enthusiast",
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
        <p className="text-lg mb-6 max-w-md mx-auto">
          Crafting seamless web and mobile applications while mastering data structures and algorithms.
        </p>

        {/* Download Resume Button */}
        <motion.a
          href="/AnuragYadavResume.pdf" // Replace with the actual path to your resume
          download="AnuragYadavResume.pdf"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-indigo-600 hover:bg-indigo-800 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 shadow-lg transform hover:translate-y-[-2px]"
        >
          Download Resume
        </motion.a>
      </motion.div>

      {/* Social Media Icons */}
      <motion.div
        className="flex space-x-6 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-3xl hover:text-gray-400 transition-colors duration-300" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-3xl hover:text-blue-400 transition-colors duration-300" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-3xl hover:text-blue-300 transition-colors duration-300" />
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
