import { ChakraTheme } from '@chakra-ui/react';
import { rem } from 'polished';

export const sizes: ChakraTheme['sizes'] = {
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1440px',
    '3xl': '1920px',
  },
};

export const space: ChakraTheme['space'] = {
  '2xs': rem(2),
  '1xs': rem(4),
  xs: rem(6),
  sm: rem(12),
  md: rem(16),
};
