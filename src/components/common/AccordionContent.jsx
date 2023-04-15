import { motion } from 'framer-motion';
import Button from './Button';

export default function Content({ description, skills }) {
    return (
        <motion.div
            variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
            transition={{ duration: 0.4 }}
            className="flex h-full flex-wrap rounded border-2 border-gray-800 bg-gray-900 p-4 text-white"
        >
            <span>{description}</span>
            {!!skills.length && (
                <span className="flex flex-wrap gap-2 pt-2">
                    {skills.map((skill, index) => (
                        <Button
                            pillButton
                            className="bg-indigo-600"
                            key={index}
                        >
                            {skill}
                        </Button>
                    ))}
                </span>
            )}
        </motion.div>
    );
}
