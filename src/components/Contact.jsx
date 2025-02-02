import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { CONTACT } from "../constants";

const Contact = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    const contactVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const whatsappNumber = '+94761200230'; 
    const welcomeMessage = encodeURIComponent("Hello! I am currently seeking internship opportunities and would love to discuss how I can contribute to your team. Could we connect to explore potential collaboration?");

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={contactVariants}
            className="border-t border-stone-900 pb-20"
        >
            <h2 className="my-10 text-center text-4xl">
                Get in Touch
            </h2>
            <div className="text-center tracking-tighter">
                <p className="my-4">
                    {CONTACT.address}
                </p>
                <a href={`mailto:${CONTACT.email}`} className="border-b">
                    {CONTACT.email}
                </a>
            </div>
            {/* Footer Section */}
            <footer className="text-center mt-10">
                <p className="text-sm text-gray-500">
                    © 2024 Mohamed Mafas. All rights reserved.
                </p>
                <p className="text-xs text-gray-400 mb-2">
                    Aspiring Full Stack Developer passionate about creating innovative solutions and leveraging technology for real-world impact.
                </p>
                <p className="text-xs text-gray-400 mb-2">
                    Skilled in web and mobile application development, with hands-on experience in technologies such as React, Node.js, and various database systems.
                </p>
                <br />
                <p className="text-xs text-gray-400 mb-2">
                    Connect with me on:
                    <a href="https://www.linkedin.com/in/m-mafas/" target="_blank" rel="noopener noreferrer" className="text-blue-500 mx-1">
                        LinkedIn
                    </a>
                    |
                    <a href="https://www.facebook.com/mhdmafas.mhdmafas.3" target="_blank" rel="noopener noreferrer" className="text-blue-500 mx-1">
                        Facebook
                    </a>
                    |
                    <a href="https://github.com/MafasDevGitHub" target="_blank" rel="noopener noreferrer" className="text-blue-500 mx-1">
                        GitHub
                    </a>
                </p>
                <p className="text-xs text-gray-400 mb-2">
                    Interested in collaboration, internships, or freelance opportunities? I’m open to new projects and eager to contribute!
                </p>
                <p className="text-xs text-gray-400 mb-2">
                    Let's connect and create something amazing together!
                </p>
                {/* WhatsApp Link with Default Message */}
                <p className="text-xs text-gray-400">
                    Chat with me on WhatsApp:
                    <a 
                        href={`https://wa.me/${whatsappNumber}?text=${welcomeMessage}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-500 mx-1">
                        WhatsApp
                    </a>
                </p>
            </footer>
        </motion.div>
    );
}

export default Contact;
