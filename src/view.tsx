import React, { memo } from 'react';
import { View as RNView } from 'react-native';

interface Props {
  children: React.ReactNode;
  style?: any;
}

export const View = memo(({ style, children }: Props) => {
  return <RNView style={style}>{children}</RNView>;
});