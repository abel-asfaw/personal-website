import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

export default function AccordionContent({ children }: PropsWithChildren) {
  return (
    <motion.div
      aria-label="Accordion content"
      variants={{ collapsed: { scale: 0.8 }, expanded: { scale: 1 } }}
      transition={{ duration: 0.4 }}
      className="flex h-full flex-col flex-wrap rounded border-[1px] border-zinc-800 p-4 hover:border-zinc-800"
    >
      {children}
    </motion.div>
  );
}
