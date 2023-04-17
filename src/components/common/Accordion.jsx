import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiOutlineMinusSm, HiOutlinePlusSm } from 'react-icons/hi';
import Content from './AccordionContent';

export default function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    function handleClick(nextIndex) {
        setExpandedIndex(nextIndex === expandedIndex ? -1 : nextIndex);
    }

    const renderedItems = items.map((item, index) => {
        const { title, date, description, skills } = item;
        const isExpanded = index === expandedIndex;
        const icon = isExpanded ? (
            <HiOutlineMinusSm size={24} />
        ) : (
            <HiOutlinePlusSm size={24} />
        );

        return (
            <div key={title}>
                <motion.div
                    animate={{
                        backgroundColor: isExpanded ? '#374151' : '#1F2937',
                    }}
                    className="mt-4 flex h-full cursor-pointer items-center gap-3 rounded p-4"
                    onClick={() => handleClick(index)}
                >
                    <AnimatePresence initial={false}>
                        <motion.div
                            initial={{ rotate: isExpanded ? -90 : 0 }}
                            animate={{ rotate: isExpanded ? 1 : -90 }}
                            transition={{ duration: 0.2 }}
                            className="text-green-400"
                        >
                            {icon}
                        </motion.div>
                    </AnimatePresence>
                    <div className="flex flex-1 flex-col sm:flex-row sm:justify-between">
                        <span className="font-medium text-white">{title}</span>
                        <span className="sm:text-right">{date}</span>
                    </div>
                </motion.div>
                <AnimatePresence initial={false}>
                    {isExpanded && (
                        <motion.div
                            key="content"
                            initial="collapsed"
                            animate="expanded"
                            exit="collapsed"
                            variants={{
                                expanded: { opacity: 1, height: 'auto' },
                                collapsed: { opacity: 0, height: 0 },
                            }}
                            transition={{
                                duration: 0.4,
                                ease: [0, 0, 0, 1],
                            }}
                            className="overflow-hidden"
                        >
                            <motion.div className="pt-4">
                                <Content
                                    description={description}
                                    skills={skills}
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    });

    return <div className="-mt-4 w-full">{renderedItems}</div>;
}
