import { AnimatePresence, motion } from 'framer-motion';
import { HiOutlineMinusSm, HiOutlinePlusSm } from 'react-icons/hi';

export default function AccordionHeader({
    title,
    date,
    isExpanded,
    onHeaderClick,
}) {
    const icon = isExpanded ? (
        <HiOutlineMinusSm size={24} aria-label="Collapse" />
    ) : (
        <HiOutlinePlusSm size={24} aria-label="Expand" />
    );

    const animationDuration = { duration: 0.4 };

    return (
        <motion.div
            animate={{
                backgroundColor: isExpanded ? '#27272a' : '#18181b',
            }}
            transition={animationDuration}
            className="flex cursor-pointer select-none items-center gap-2 rounded px-2 py-4 sm:p-4"
            onClick={onHeaderClick}
        >
            <AnimatePresence initial={false}>
                <motion.div
                    initial={{ rotate: isExpanded ? -90 : 0 }}
                    animate={{ rotate: isExpanded ? 1 : -90 }}
                    transition={animationDuration}
                    className="text-green-400"
                >
                    {icon}
                </motion.div>
            </AnimatePresence>
            <div className="flex flex-1 flex-col sm:flex-row sm:justify-between">
                <span className="font-medium">{title}</span>
                <span className="text-neutral-400 sm:text-right">{date}</span>
            </div>
        </motion.div>
    );
}
