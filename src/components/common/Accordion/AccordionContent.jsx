import { PillButton } from '../Button';
import { motion } from 'framer-motion';

export default function AccordionContent({ description, skills }) {
    return (
        <motion.div
            aria-label="Accordion content"
            variants={{ collapsed: { scale: 0.8 }, expanded: { scale: 1 } }}
            transition={{ duration: 0.4 }}
            className="flex h-full flex-col flex-wrap rounded border-2 border-zinc-900 p-4"
        >
            <span className="leading-relaxed">{description}</span>
            {!!skills.length && (
                <span className="flex flex-wrap gap-2 pt-2">
                    {skills.map((skill) => (
                        <PillButton
                            key={skill}
                            className="bg-indigo-600 font-roboto text-white"
                        >
                            {skill}
                        </PillButton>
                    ))}
                </span>
            )}
        </motion.div>
    );
}
