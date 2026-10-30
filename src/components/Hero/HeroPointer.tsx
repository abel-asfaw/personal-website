import * as stylex from '@stylexjs/stylex';

import type { PointerState } from '../../hooks/usePointerTracking';

import { heroPointer } from './Hero.styles';

interface HeroPointerProps {
  pointer: PointerState;
}

/** Glow and crosshairs that follow the pointer across the hero. */
export function HeroPointer({ pointer }: HeroPointerProps) {
  const { active, x, y, isFingerDrag } = pointer;
  const tracking = [
    heroPointer.tracking,
    isFingerDrag && heroPointer.touching,
    active && heroPointer.visible,
  ];

  return (
    <>
      <div
        aria-hidden="true"
        {...stylex.props(
          heroPointer.glow,
          tracking,
          heroPointer.at(`translate(${x}px, ${y}px)`),
        )}
      />
      <div
        aria-hidden="true"
        {...stylex.props(
          heroPointer.hair,
          heroPointer.hairVertical,
          tracking,
          heroPointer.at(`translateX(${x}px)`),
        )}
      />
      <div
        aria-hidden="true"
        {...stylex.props(
          heroPointer.hair,
          heroPointer.hairHorizontal,
          tracking,
          heroPointer.at(`translateY(${y}px)`),
        )}
      />
    </>
  );
}
