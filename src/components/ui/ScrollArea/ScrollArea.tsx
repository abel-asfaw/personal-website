import type { ReactNode } from 'react';

import * as stylex from '@stylexjs/stylex';

import { useScrollEdges } from '../../../hooks/useScrollEdges';
import { scrollArea } from './ScrollArea.styles';

interface ScrollAreaProps {
  /** Id of the heading that names the area while it scrolls. */
  labelledBy: string;
  children: ReactNode;
}

/**
 * Fills the rest of a panel's flex column and scrolls what doesn't fit,
 * fading the content into the panel at an edge with more past it.
 */
export default function ScrollArea({ labelledBy, children }: ScrollAreaProps) {
  const { ref, edges } = useScrollEdges();
  const canScroll = edges.above || edges.below;

  return (
    <div {...stylex.props(scrollArea.root)}>
      <section
        ref={ref}
        // While it scrolls, it takes focus so a keyboard can scroll it in
        // Safari too, and is named as a region for it.
        aria-labelledby={canScroll ? labelledBy : undefined}
        // oxlint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={canScroll ? 0 : undefined}
        {...stylex.props(scrollArea.scroller)}
      >
        {children}
      </section>
      <span
        aria-hidden="true"
        {...stylex.props(
          scrollArea.edge,
          scrollArea.edgeAbove,
          edges.above && scrollArea.edgeShown,
        )}
      />
      <span
        aria-hidden="true"
        {...stylex.props(
          scrollArea.edge,
          scrollArea.edgeBelow,
          edges.below && scrollArea.edgeShown,
        )}
      />
    </div>
  );
}
