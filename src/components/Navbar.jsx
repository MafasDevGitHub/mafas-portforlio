import { Link } from 'react-router-dom'; // Import Link from React Router
import logo from '../assets/MafasLogoBlack.png'; // Import your logo
import { motion } from 'framer-motion'; // Import Framer Motion
import { useState } from 'react'; // Import useState for managing menu state

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State for mobile menu

    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
            }
        }
    };

    return (
        <motion.nav 
            initial="hidden" 
            animate="visible" 
            variants={containerVariants}
            className="flex items-center justify-between py-6 bg-black relative z-10" // Set z-index
        >
            <div className="flex flex-shrink-0 items-center">
                <Link to="/" aria-label="Home">
                    <img src={logo} className="mx-2" width={100} height={100} alt="Logo"/>
                </Link>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center gap-8 text-xl">
                <Link to="/hero" className="text-stone-300 hover:text-white">Home</Link>
                <Link to="/technologies" className="text-stone-300 hover:text-white">Technologies</Link>
                <Link to="/projects" className="text-stone-300 hover:text-white">Projects</Link>
                <Link to="/experience" className="text-stone-300 hover:text-white">Experience</Link>
                <Link to="/contact" className="text-stone-300 hover:text-white">Contact</Link>
            </div>
            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="text-stone-300 hover:text-white focus:outline-none"
                >
                    {/* Mobile menu icon */}
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <motion.div 
                    className="absolute top-full left-0 right-0 bg-black md:hidden" // Positioning under the navbar
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.3 }}
                >
                    <div className="flex flex-col items-center">
                        <Link to="/hero" className="text-stone-300 hover:text-white py-2" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link to="/technologies" className="text-stone-300 hover:text-white py-2" onClick={() => setIsOpen(false)}>Technologies</Link>
                        <Link to="/projects" className="text-stone-300 hover:text-white py-2" onClick={() => setIsOpen(false)}>Projects</Link>
                        <Link to="/experience" className="text-stone-300 hover:text-white py-2" onClick={() => setIsOpen(false)}>Experience</Link>
                        <Link to="/contact" className="text-stone-300 hover:text-white py-2" onClick={() => setIsOpen(false)}>Contact</Link>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}

export default Navbar;
