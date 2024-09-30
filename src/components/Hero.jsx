import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import profilePic from "../assets/MafasProfile.jpg";
import { HERO_CONTENT } from "../constants";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    const heroVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, staggerChildren: 0.5 } }
    };

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
                        <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl">Mohamed Mafas</h2>
                        <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
                            Full Stack Developer
                        </span>
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
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" download className="bg-white rounded-full p-4 tex-sm text-stone-800 mb-10">
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Hero;