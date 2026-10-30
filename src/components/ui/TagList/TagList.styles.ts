import * as stylex from '@stylexjs/stylex';

import { fonts, themeColors } from '../../../styles/tokens.stylex';

export const tagList = stylex.create({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 6,
  },
  tag: {
    fontFamily: fonts.mono,
    fontSize: 12,
    lineHeight: 1.4,
    paddingBlock: 5,
    paddingInline: 10,
    borderRadius: 999,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: themeColors.line,
    whiteSpace: 'nowrap',
  },
});
