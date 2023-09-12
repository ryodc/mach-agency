import { Box, Container, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Header } from '../features/layout/Header';
import { Footer } from '../features/layout/Footer';

interface BaseLayoutProps {
  children?: ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <Flex flexDirection="column" height="100vh">
      <Header />
      <Box as="main" flex="1 0 auto" display="block">
        <Container display="grid" placeItems="center" height="100vh">
          {children}
        </Container>
      </Box>
      <Footer />
    </Flex>
  );
}
