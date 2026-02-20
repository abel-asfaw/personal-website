import { AnimatePresence, motion } from 'motion/react';
import { useId, useState } from 'react';

import { AccordionContent, AccordionHeader } from './';

interface AccordionProps {
  headerContent: React.ReactNode;
  bodyContent: React.ReactNode;
}

export default function Accordion({
  headerContent,
  bodyContent,
}: AccordionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const id = useId();
  const headerId = `${id}-header`;
  const contentId = `${id}-content`;

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const accordionVariants = {
    expanded: { opacity: 1, height: 'auto' },
    collapsed: { opacity: 0, height: 0 },
  };

  const accordionTransition = {
    duration: 0.4,
    ease: [0, 0, 0, 1] as [number, number, number, number],
  };

  return (
    <>
      <AccordionHeader
        id={headerId}
        aria-controls={contentId}
        isExpanded={isExpanded}
        onHeaderClick={handleClick}
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
              <AccordionContent id={contentId} aria-labelledby={headerId}>
                {bodyContent}
              </AccordionContent>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
