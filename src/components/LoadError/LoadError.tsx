import * as stylex from '@stylexjs/stylex';

import { Button } from '../ui/Button';
import { loadError } from './LoadError.styles';

interface LoadErrorProps {
  isRetrying: boolean;
  onRetry: () => void;
}

/** Shown in place of the sections whose Contentful content failed to load. */
export function LoadError({ isRetrying, onRetry }: LoadErrorProps) {
  return (
    <section role="alert" {...stylex.props(loadError.root)}>
      <div {...stylex.props(loadError.card)}>
        <div {...stylex.props(loadError.copy)}>
          <span {...stylex.props(loadError.eyebrow)}>Signal lost</span>
          <h2 {...stylex.props(loadError.title)}>
            Part of the route didn't load.
          </h2>
          <p {...stylex.props(loadError.body)}>
            Check your connection and try again.
          </p>
        </div>
        <Button variant="solid" onClick={onRetry} disabled={isRetrying}>
          {isRetrying ? 'Trying again…' : 'Try again'}
        </Button>
      </div>
    </section>
  );
}
