import { motion } from 'framer-motion';
import PillButton from './PillButton';

export default function Content({ description, skills }) {
    return (
        <motion.div
            aria-label="Accordion content"
            variants={{ collapsed: { scale: 0.8 }, expanded: { scale: 1 } }}
            transition={{ duration: 0.4 }}
            className="flex h-full flex-wrap rounded border-2 border-gray-800 bg-gray-900 p-4 text-white"
        >
            <span>{description}</span>
            {!!skills.length && (
                <span className="flex flex-wrap gap-2 pt-2">
                    {skills.map(skill => (
                        <PillButton key={skill} className="bg-indigo-600">
                            {skill}
                        </PillButton>
                    ))}
                </span>
            )}
        </motion.div>
    );
}
