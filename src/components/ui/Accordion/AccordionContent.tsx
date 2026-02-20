import { motion } from 'motion/react';
import { PropsWithChildren } from 'react';

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
    <motion.div
      id={id}
      role="region"
      aria-labelledby={ariaLabelledby}
      variants={{ collapsed: { scale: 0.8 }, expanded: { scale: 1 } }}
      transition={{ duration: 0.4 }}
      className="flex h-full flex-col flex-wrap rounded border-[1px] border-zinc-800 bg-zinc-950 p-4"
    >
      {children}
    </motion.div>
  );
}
