import * as stylex from '@stylexjs/stylex';

import { fonts, themeColors } from '../../styles/tokens.stylex';

export const loadError = stylex.create({
  root: {
    maxWidth: 1240,
    marginInline: 'auto',
    paddingTop: 24,
    paddingInline: 24,
  },
  card: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 24,
    borderRadius: 28,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: themeColors.line,
    backgroundColor: themeColors.panel,
    padding: 'clamp(24px, 4vw, 40px)',
  },
  copy: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  eyebrow: {
    fontFamily: fonts.mono,
    fontSize: 13,
    color: themeColors.accentText,
  },
  title: {
    fontSize: 'clamp(24px, 3vw, 32px)',
    fontWeight: 700,
    letterSpacing: '-0.02em',
  },
  body: {
    maxWidth: 520,
    color: themeColors.muted,
  },
});
