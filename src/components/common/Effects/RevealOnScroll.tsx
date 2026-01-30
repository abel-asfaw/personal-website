import classNames from 'classnames';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';

export default function RevealOnScroll({ children }: PropsWithChildren) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) {
      return;
    }

    const scrollObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          scrollObserver.unobserve(entry.target);
        }
      },
      {
        rootMargin: '-50px',
      },
    );

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
