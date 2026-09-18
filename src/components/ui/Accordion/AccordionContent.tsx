import * as stylex from '@stylexjs/stylex';
import { motion } from 'motion/react';
import { PropsWithChildren } from 'react';
import { accordionContent } from './Accordion.styles';

interface AccordionContentProps extends PropsWithChildren {
  id: string;
  'aria-labelledby': string;
}

export default function AccordionContent({
  id,
  'aria-labelledby': ariaLabelledby,
  children,
}: AccordionContentProps) {
  return (
    <motion.section
      id={id}
      aria-labelledby={ariaLabelledby}
      variants={{ collapsed: { scale: 0.8 }, expanded: { scale: 1 } }}
      transition={{ duration: 0.4 }}
      {...stylex.props(accordionContent.root)}
    >
      {children}
    </motion.section>
  );
}
