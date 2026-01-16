declare module 'react-lazy-load-image-component' {
  import * as React from 'react';

  export type ScrollPosition = {
    x: number;
    y: number;
  };

  export const LazyLoadComponent: React.FC<any>;

  export function trackWindowScroll<T>(
    Component: T
  ): T;
}
