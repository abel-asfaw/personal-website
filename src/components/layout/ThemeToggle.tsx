import * as stylex from '@stylexjs/stylex';

import type { Theme } from '../../hooks/useTheme';

import { Button } from '../ui/Button';
import { MoonIcon, SunIcon } from '../ui/Icons';
import { themeToggle } from './ThemeToggle.styles';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isNight = theme === 'night';

  return (
    <Button
      variant="text"
      onClick={onToggle}
      aria-label={isNight ? 'Switch to day mode' : 'Switch to night mode'}
      style={themeToggle.root}
    >
      <span
        {...stylex.props(themeToggle.segment, !isNight && themeToggle.active)}
      >
        <SunIcon />
        <span {...stylex.props(themeToggle.word)}>Day</span>
      </span>
      <span
        {...stylex.props(themeToggle.segment, isNight && themeToggle.active)}
      >
        <MoonIcon />
        <span {...stylex.props(themeToggle.word)}>Night</span>
      </span>
    </Button>
  );
}
