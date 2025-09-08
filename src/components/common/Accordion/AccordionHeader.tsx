import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { HiOutlineMinusSm, HiOutlinePlusSm } from 'react-icons/hi';

interface AccordionHeaderProps extends PropsWithChildren {
  isExpanded: boolean;
  onHeaderClick: () => void;
}

export default function AccordionHeader({
  isExpanded,
  onHeaderClick,
  children,
}: AccordionHeaderProps) {
  const Icon = isExpanded ? HiOutlineMinusSm : HiOutlinePlusSm;

  const animationDuration = { duration: 0.4 };

  const classes = classNames(
    'border-zinc-850 flex cursor-pointer select-none items-center gap-2 rounded border-[1px] px-2 py-4 sm:p-4',
  );

  return (
    <motion.div
      animate={{
        backgroundColor: isExpanded ? '#27272a' : '#18181b',
        borderColor: isExpanded ? '#27272a' : '#1f1f22',
      }}
      transition={animationDuration}
      className={classes}
      onClick={onHeaderClick}
    >
      <AnimatePresence initial={false}>
        <motion.div
          initial={{ rotate: isExpanded ? -90 : 0 }}
          animate={{ rotate: isExpanded ? 1 : -90 }}
          transition={animationDuration}
          className="text-green-400"
        >
          <Icon size={24} aria-label={isExpanded ? 'expanded' : 'collapsed'} />
        </motion.div>
      </AnimatePresence>
      {children}
    </motion.div>
  );
}
