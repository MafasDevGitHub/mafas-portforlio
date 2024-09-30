import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { EXPERIENCES } from "../constants";

const Experiance = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

    const experienceVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: "easeOut" } }
    };

    return (
        <div className="pb-4">
            <h2 className="my-20 text-center text-4xl">Brief Details Of Project Experiences</h2>
            <div ref={ref}>
                {EXPERIENCES.map((experience, index) => (
                    <motion.div
                        key={index}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        variants={experienceVariants}
                        className="mb-8 flex flex-wrap lg:justify-center"
                        style={{ transitionDelay: `${index * 0.2}s` }} // Adds a delay based on index
                    >
                        <div className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-stone-400">
                                {experience.year}
                            </p>
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h3 className="mb-2 font-semibold">
                                {experience.role} -{" "}
                                <span className="text-sm text-stone-500">
                                    {experience.company}
                                </span>
                            </h3>
                            <p className="mb-4 text-stone-400">
                                {experience.description}
                            </p>
                            {experience.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Experiance;
