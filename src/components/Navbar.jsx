import { Link } from 'react-router-dom'; 
import logo from '../assets/mafasLogo.png'; 
import { motion } from 'framer-motion'; 
import { useState } from 'react'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); 

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
            className="flex items-center justify-between py-6 relative z-10"
        >
            {/* Logo Section */}
            <div className="flex flex-shrink-0 items-center">
                <Link to="/" aria-label="Home">
                    <img src={logo} className="mx-0" width={150} height={130} alt="Logo" />
                </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:justify-center gap-8 text-xl">
                <Link to="/" className="text-stone-300 hover:text-white">Home</Link>
                <Link to="/about" className="text-stone-300 hover:text-white">About Me</Link>
                <Link to="/technologies" className="text-stone-300 hover:text-white">Technologies</Link>
                <Link to="/projects" className="text-stone-300 hover:text-white">Projects</Link>
                <Link to="/experience" className="text-stone-300 hover:text-white">Experience</Link>
                <Link to="/contact" className="text-stone-300 hover:text-white">Contact</Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="text-stone-300 hover:text-white focus:outline-none"
                >
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
                    className="absolute top-full left-0 right-0 bg-black md:hidden"
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.3 }}
                >
                    <div className="flex flex-col items-center">
                        <Link to="/" className="text-stone-300 hover:text-white py-2" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link to="/about" className="text-stone-300 hover:text-white py-2" onClick={() => setIsOpen(false)}>About Me</Link>
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
