import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3, FaGithub, FaPhp } from "react-icons/fa";
import { FaBootstrap, FaPython } from "react-icons/fa6";
import { RiDatabaseLine, RiJavaLine, RiJavascriptLine, RiNodejsLine, RiReactjsLine } from "react-icons/ri";
import { SiAnaconda, SiAndroidstudio, SiApachenetbeanside, SiArduino, SiC, SiCodeblocks, SiCsharp, SiEclipseide, SiExpress, SiKotlin, SiMongodb, SiTailwindcss, SiVisualstudio, SiVisualstudiocode } from "react-icons/si";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Technologies = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    // Animation variants for the container and the children
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Stagger each child icon by 0.1 seconds
            }
        }
    };

    const iconVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="pb-24"
        >
            <h2 className="my-20 text-center text-4xl">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                {/* Icons wrapped with motion.div for individual animation */}
                <motion.div variants={iconVariants}>
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div variants={iconVariants} className="p-4">
                    <RiJavascriptLine className="text-7xl text-yellow-400" />
                </motion.div>
                <motion.div variants={iconVariants} className="p-4">
                    <RiJavaLine className="text-7xl text-red-600" />
                </motion.div>
                <motion.div variants={iconVariants} className="p-4">
                    <RiNodejsLine className="text-7xl text-green-500" />
                </motion.div>
                <motion.div variants={iconVariants} className="p-4">
                    <RiDatabaseLine className="text-7xl text-blue-500" />
                </motion.div>
                <motion.div variants={iconVariants} className="p-4">
                    <SiMongodb className="text-7xl text-green-600" />
                </motion.div>
                <motion.div variants={iconVariants} className="p-4">
                    <AiFillHtml5 className="text-7xl text-orange-600" />
                </motion.div>
                <motion.div variants={iconVariants} className="p-4">
                    <FaCss3 className="text-7xl text-blue-600" />
                </motion.div>
                <motion.div variants={iconVariants} className="p-4">
                    <SiTailwindcss className="text-7xl text-teal-400" />
                </motion.div>
                <motion.div variants={iconVariants} className="p-4">
                    <SiKotlin className="text-7xl text-purple-600" />
                </motion.div>
                <motion.div variants={iconVariants} className="p-4">
                    <FaPython className="text-7xl text-yellow-400" />
                </motion.div>
                <motion.div variants={iconVariants} className="p-4">
                    <FaPhp className="text-7xl text-purple-500" />
                </motion.div>
                <motion.div variants={iconVariants} className="p-4">
                    <FaBootstrap className="text-7xl text-indigo-600" />
                </motion.div>
                <motion.div variants={iconVariants} className="p-4">
                    <SiCsharp className="text-7xl text-purple-600" />
                </motion.div>
                <motion.div variants={iconVariants} className="p-4">
                    <SiC className="text-7xl text-blue-600" />
                </motion.div>
                <motion.div variants={iconVariants} className="p-4">
                    <SiExpress className="text-7xl text-gray-600" />
                </motion.div>
                <motion.div variants={iconVariants} className="p-4">
                    <SiArduino className="text-7xl text-blue-600" />
                </motion.div>
                <motion.div variants={iconVariants} className="p-4">
                    <SiVisualstudiocode className="text-7xl text-blue-600" />
                </motion.div>
                <motion.div variants={iconVariants} className="p-4">
                    <SiVisualstudio className="text-7xl text-purple-700" />
                </motion.div>
                <motion.div variants={iconVariants} className="p-4">
                    <SiEclipseide className="text-7xl text-orange-500" />
                </motion.div>
                <motion.div variants={iconVariants} className="p-4">
                    <SiAnaconda className="text-7xl text-green-500" />
                </motion.div>
                <motion.div variants={iconVariants} className="p-4">
                    <SiCodeblocks className="text-7xl text-red-600" />
                </motion.div>
                <motion.div variants={iconVariants} className="p-4">
                    <SiAndroidstudio className="text-7xl text-blue-500" />
                </motion.div>
                <motion.div variants={iconVariants} className="p-4">
                    <SiApachenetbeanside className="text-7xl text-red-600" />
                </motion.div>
                <motion.div variants={iconVariants} className="p-4">
                    <FaGithub className="text-7xl text-black-600" />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Technologies;
