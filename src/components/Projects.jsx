import { PROJECTS } from "../constants";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // React Intersection Observer hook

const Project = () => {
    // Animation variants
    const itemVariants = {
        hidden: { opacity: 0, y: 50 }, // Start lower and invisible
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } // Fade in and move up when visible
    };

    return (
        <div className="pb-4">
            <h2 className="my-20 text-center text-4xl">Projects</h2>
            <div className="flex flex-wrap justify-center">
                {PROJECTS.map((project, index) => {
                    // Using useInView from react-intersection-observer for each project
                    const { ref, inView } = useInView({
                        triggerOnce: true,  // Trigger animation only once
                        threshold: 0.2      // Start animation when 20% of the component is visible
                    });

                    return (
                        <motion.div 
                            ref={ref} // Reference for intersection observer
                            key={index} 
                            initial="hidden" 
                            animate={inView ? 'visible' : 'hidden'} // Animate based on visibility
                            variants={itemVariants} 
                            className="mb-8 w-full max-w-xs p-4" // Set max width for each project item
                        >
                            <div className="flex flex-col items-center">
                                <img src={project.image} width={250} height={250} alt={project.title} className="mb-6 rounded" />
                                <h3 className="mb-2 font-semibold text-2xl text-center">
                                    {project.title}
                                </h3>
                                <p className="mb-4 text-stone-400 text-center">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap justify-center">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="mr-2 mb-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

export default Project;
