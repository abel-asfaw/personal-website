import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { HiOutlineMinusSm, HiOutlinePlusSm } from 'react-icons/hi';

interface AccordionHeaderProps {
    title: string;
    date: string;
    isExpanded: boolean;
    onHeaderClick: () => void;
}

export default function AccordionHeader({
    title,
    date,
    isExpanded,
    onHeaderClick,
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
                    <Icon
                        size={24}
                        aria-label={isExpanded ? 'expanded' : 'collapsed'}
                    />
                </motion.div>
            </AnimatePresence>
            <div className="flex flex-1 flex-col sm:flex-row sm:justify-between">
                <span className="font-medium">{title}</span>
                <span className="text-neutral-400 sm:text-right">{date}</span>
            </div>
        </motion.div>
    );
}
