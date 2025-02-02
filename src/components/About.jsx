import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // Animation variants for the section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
        staggerChildren: 0.3,
      },
    },
  };

  // Animation variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  return (
    <motion.div 
      className="p-8 min-h-screen text-white" 
      initial="hidden" 
      animate="visible" 
      variants={sectionVariants}
    >
      <motion.h1 
        className="text-4xl font-bold text-center text-white mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        About Me
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Personal Information Section */}
        <motion.div 
          className="backdrop-blur-sm bg-white bg-opacity-10 shadow-xl rounded-lg p-6 hover:bg-opacity-20 transition duration-300 ease-in-out transform hover:scale-105"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-semibold text-gray-100 mb-4">Personal Information</h2>
          <div className="text-gray-300"><strong className="text-white">Name:</strong> Mohamed Mafas</div>
          <div className="text-gray-300"><strong className="text-white">DOB:</strong> 17-06-2002</div>
          <div className="text-gray-300"><strong className="text-white">Lives In:</strong> Narammala, Kurunegala</div>
          <div className="text-gray-300"><strong className="text-white">Interest:</strong> Full Stack Development</div>
          <div className="text-gray-300"><strong className="text-white">Languages:</strong> English, Tamil, Sinhala</div>
          <div className="text-gray-300"><strong className="text-white">E-Mail:</strong> mafas7647@gmail.com</div>
          <div className="text-gray-300"><strong className="text-white">Phone:</strong> +94 76 1 200 230</div>
          <div className="text-gray-300"><strong className="text-white">Career Goal:</strong> Full-Stack Development</div>
        </motion.div>

        {/* Education Section */}
        <motion.div 
          className="backdrop-blur-sm bg-white bg-opacity-10 shadow-xl rounded-lg p-6 hover:bg-opacity-20 transition duration-300 ease-in-out transform hover:scale-105"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-semibold text-gray-100 mb-4">Education</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-white">BSc (Hons) in Computer Engineering</h3>
            <p className="text-gray-300">National Institute of Business Management (NIBM) Affiliated with Coventry University</p>
            <p className="text-sm text-gray-500">Expected End Date: November 2024</p>
            <p className="text-gray-300">Currently completing my HND in Software Engineering and learning new technologies.</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-white">Diploma in Software Engineering</h3>
            <p className="text-sm text-gray-500">Completed in November 2023</p>
            <p className="text-gray-300">Completed & Achieved a good GPA from NIBM in Software Engineering.</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-white">Diploma in English</h3>
            <p className="text-sm text-gray-500">Completed in Aug 2022</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Advanced Level</h3>
            <p className="text-sm text-gray-500">Engineering Technology - 2021</p>
            <p className="text-gray-300">Passed the A/L</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
