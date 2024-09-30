import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { CONTACT } from "../constants";

const Contact = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    const contactVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
    };

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
        </motion.div>
    );
}

export default Contact;
