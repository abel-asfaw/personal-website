import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { Minus, Plus } from 'react-feather';

interface AccordionHeaderProps extends PropsWithChildren {
  isExpanded: boolean;
  onHeaderClick: () => void;
}

const animationDuration = { duration: 0.4 };

export default function AccordionHeader({
  isExpanded,
  onHeaderClick,
  children,
}: AccordionHeaderProps) {
  const Icon = isExpanded ? Minus : Plus;

  const classes = classNames(
    'border-zinc-800 flex cursor-pointer w-full select-none items-center gap-2 rounded border-[.5px] px-2 py-4 sm:p-4 drop-shadow-md/25',
  );

  return (
    <motion.button
      role="button"
      aria-expanded={isExpanded}
      animate={{
        backgroundColor: isExpanded ? '#27272a' : '#18181b',
        borderColor: isExpanded ? '#27272a' : '#1f1f22',
      }}
      transition={animationDuration}
      className={classes}
      onClick={onHeaderClick}
    >
      <motion.div
        initial={{ rotate: isExpanded ? -90 : 0 }}
        animate={{ rotate: isExpanded ? 1 : -90 }}
        transition={animationDuration}
        className="text-green-400"
      >
        <Icon size={20} aria-label={isExpanded ? 'expanded' : 'collapsed'} />
      </motion.div>
      {children}
    </motion.button>
  );
}
