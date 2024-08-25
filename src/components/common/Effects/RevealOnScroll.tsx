import classNames from 'classnames';
import { useRef, useState, useEffect } from 'react';

interface RevealOnScrollProps {
    children: React.ReactNode;
}

export default function RevealOnScroll({ children }: RevealOnScrollProps) {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!scrollRef.current) {
            return;
        }

        const scrollObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                scrollObserver.unobserve(entry.target);
            }
        });

        scrollObserver.observe(scrollRef.current);

        return () => {
            if (scrollRef.current) {
                scrollObserver.unobserve(scrollRef.current);
            }
        };
    }, []);

    const classes = classNames('transition-opacity duration-1000', {
        'opacity-0': !isVisible,
    });

    return (
        <div ref={scrollRef} className={classes}>
            {children}
        </div>
    );
}
