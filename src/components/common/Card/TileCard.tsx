import classNames from 'classnames';
import { PropsWithChildren } from 'react';

interface TileCardProps extends PropsWithChildren {
  className?: string;
}

export default function TileCard({ className, children }: TileCardProps) {
  const classes = classNames(
    'flex h-full w-full flex-col items-center gap-2 rounded bg-zinc-900 p-3 xs:w-40 border-zinc-800 border-[0.5px]',
    'cursor-default duration-500 will-change-transform hover:scale-[1.08] hover:bg-zinc-800 drop-shadow-md/25',
    className,
  );

  return <div className={classes}>{children}</div>;
}
