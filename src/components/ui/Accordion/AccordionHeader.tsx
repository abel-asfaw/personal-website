import * as stylex from '@stylexjs/stylex';
import { motion } from 'motion/react';
import { PropsWithChildren } from 'react';
import { Minus, Plus } from 'lucide-react';
import { accordionHeader } from './Accordion.styles';
import { colors } from '../../../styles/tokens.stylex';

interface AccordionHeaderProps extends PropsWithChildren {
  id: string;
  'aria-controls': string;
  isExpanded: boolean;
  onHeaderClick: () => void;
}

const animationDuration = { duration: 0.4 };

export default function AccordionHeader({
  id,
  'aria-controls': ariaControls,
  isExpanded,
  onHeaderClick,
  children,
}: AccordionHeaderProps) {
  const Icon = isExpanded ? Minus : Plus;

  return (
    <h3>
      <motion.button
        id={id}
        aria-expanded={isExpanded}
        aria-controls={ariaControls}
        animate={{
          backgroundColor: isExpanded ? colors.surfaceHover : colors.surface,
          borderColor: isExpanded ? colors.border : colors.borderSubtle,
        }}
        transition={animationDuration}
        onClick={onHeaderClick}
        {...stylex.props(accordionHeader.root)}
      >
        <motion.div
          initial={{ rotate: isExpanded ? -90 : 0 }}
          animate={{ rotate: isExpanded ? 1 : -90 }}
          transition={animationDuration}
          {...stylex.props(accordionHeader.icon)}
        >
          <Icon size={20} aria-label={isExpanded ? 'expanded' : 'collapsed'} />
        </motion.div>
        {children}
      </motion.button>
    </h3>
  );
}
