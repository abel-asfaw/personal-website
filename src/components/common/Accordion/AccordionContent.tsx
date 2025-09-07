import { PillButton } from '../Button';
import { motion } from 'framer-motion';

interface AccordionContentProps {
  description: string;
  tags: string[];
}

export default function AccordionContent({
  description,
  tags,
}: AccordionContentProps) {
  return (
    <motion.div
      aria-label="Accordion content"
      variants={{ collapsed: { scale: 0.8 }, expanded: { scale: 1 } }}
      transition={{ duration: 0.4 }}
      className="flex h-full flex-col flex-wrap rounded border-[1px] border-zinc-850 p-4 hover:border-zinc-800"
    >
      <span className="leading-relaxed">{description}</span>
      {!!tags.length && (
        <span className="flex flex-wrap gap-2 pt-2">
          {tags.map(tag => (
            <PillButton
              key={tag}
              className="bg-indigo-600 font-roboto text-white"
            >
              {tag}
            </PillButton>
          ))}
        </span>
      )}
    </motion.div>
  );
}
