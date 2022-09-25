import React from 'react';
import { Text } from 'react-native';

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export function StackRoot() {
  return <Text>asdasd</Text>;
}
