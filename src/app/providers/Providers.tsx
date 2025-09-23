'use client';

import React, { ReactNode } from 'react';
import { Provider } from 'jotai';

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

export const Providers = ({ children, ...props }: Props) => {
  return <Provider {...props}>{children}</Provider>;
};
