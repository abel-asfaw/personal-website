import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { AccordionContent, AccordionHeader } from './';

interface AccordionProps {
  index: number;
  headerContent: React.ReactNode;
  bodyContent: React.ReactNode;
}

export default function Accordion({
  index,
  headerContent,
  bodyContent,
}: AccordionProps) {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const isExpanded = index === expandedIndex;

  const handleClick = (nextIndex: number) => {
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

  return (
    <div className="w-full">
      <AccordionHeader
        isExpanded={isExpanded}
        onHeaderClick={() => handleClick(index)}
      >
        {headerContent}
      </AccordionHeader>
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
              <AccordionContent>{bodyContent}</AccordionContent>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
