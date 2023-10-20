import classNames from 'classnames';
import { useRef, useState, useEffect } from 'react';

export default function RevealOnScroll({ children }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const scrollObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                scrollObserver.unobserve(entry.target);
            }
        });

        scrollObserver.observe(ref.current);

        return () => {
            if (ref.current) {
                scrollObserver.unobserve(ref.current);
            }
        };
    }, []);

    const classes = classNames('transition-opacity duration-1000', {
        'opacity-0': !isVisible,
    });

    return (
        <div ref={ref} className={classes}>
            {children}
        </div>
    );
}
