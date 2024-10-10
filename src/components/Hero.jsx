import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import profilePic from "../assets/MafasProfile.jpg";
import { HERO_CONTENT } from "../constants";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { CONTACT } from "../constants";

const Hero = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    const heroVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, staggerChildren: 0.5 } }
    };

    const titles = ["Full Stack Developer", "MERN Stack"];
    const [currentTitle, setCurrentTitle] = useState(0);

    const whatsappNumber = '+94761200230';
    const welcomeMessage = encodeURIComponent("Hello! I am currently seeking internship opportunities and would love to discuss how I can contribute to your team. Could we connect to explore potential collaboration?");

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitle((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
        }, 3000); // Change every 3 seconds
        return () => clearInterval(interval);
    }, [titles.length]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={heroVariants}
            className="pb-4 lg:mb-40"
        >
            <div className="flex flex-wrap lg:flex-row-reverse">
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:p-8">
                        <img src={profilePic} alt="Mafas" className="border border-stone-900 rounded-3xl" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start mt-10">
                        <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl">Mohamed <b>Mafas</b></h2>

                        {/* Titles Animation */}
                        <motion.span
                            className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent'
                            key={currentTitle}
                            initial={{ opacity: 0, skewX: 20, x: -100 }}  // Skew and slide in from left
                            animate={{ opacity: 1, skewX: 0, x: 0 }}      // Normal position
                            exit={{ opacity: 0, skewX: -20, x: 100 }}     // Skew and slide out to right
                            transition={{
                                duration: 0.8,
                                ease: "easeInOut",
                                type: "tween"
                            }}
                        >
                            {titles[currentTitle]}
                        </motion.span>




                        <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
                            {HERO_CONTENT}
                        </p>

                        <div className="m-1 flex items-center justify-center gap-6 text-3xl">
                            <a href="https://www.linkedin.com/in/m-mafas/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIN">
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/MafasDevGitHub" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FaGithub />
                            </a>
                            <a href="https://www.instagram.com/mafas_official_11/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                            <a href="https://www.facebook.com/mhdmafas.mhdmafas.3" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <FaFacebook />
                            </a>
                        </div><br />
                        <div className="flex justify-center items-center space-x-4">
                            <a href="/mafas-portforlio/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                download="Mafas_resume.pdf"
                                className="bg-white rounded-harf p-1 text-md text-stone-1000 w-full max-w-xs flex-grow text-center
                                hover:bg-stone-200 hover:text-stone-700 hover:shadow-lg transition duration-200 ease-on-out">
                                Download Resume
                            </a>
                            <a
                                href={`mailto:${CONTACT.email}?subject=Hire%20Me`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white rounded-harf p-4 text-md text-stone-1000 w-full max-w-xs flex-grow text-center
                                hover:bg-stone-200 hover:text-stone-700 hover:shadow-lg transition duration-200 ease-out"
                            >
                                Hire Me
                            </a>

                        </div>





                    </div>
                </div>
            </div>
        </motion.div >
    );
};

export default Hero;
