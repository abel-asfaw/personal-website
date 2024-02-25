import { AccordionContent, AccordionHeader } from '.';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export default function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = nextIndex => {
        setExpandedIndex(nextIndex === expandedIndex ? -1 : nextIndex);
    };

    const accordionVariants = {
        expanded: { opacity: 1, height: 'auto' },
        collapsed: { opacity: 0, height: 0 },
    };

    const accordionTransition = {
        duration: 0.4,
        ease: [0, 0, 0, 1],
    };

    const renderedItems = items.map((item, index) => {
        const { title, date, description, skills } = item;
        const isExpanded = index === expandedIndex;

        return (
            <div key={title} className="w-full">
                <AccordionHeader
                    title={title}
                    date={date}
                    isExpanded={isExpanded}
                    onHeaderClick={() => handleClick(index)}
                />
                <AnimatePresence initial={false}>
                    {isExpanded && (
                        <motion.div
                            key="content"
                            initial="collapsed"
                            animate="expanded"
                            exit="collapsed"
                            variants={accordionVariants}
                            transition={accordionTransition}
                            className="overflow-hidden"
                        >
                            <motion.div className="pt-4">
                                <AccordionContent
                                    description={description}
                                    tags={skills}
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    });

    return <>{renderedItems}</>;
}
