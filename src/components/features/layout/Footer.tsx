import { Grid, Flex, Heading, Box, Container } from '@chakra-ui/react';
import Logo from '@/icons/components/Logo';

export function Footer() {
  return (
    <Box as="footer" backgroundColor="secondary" color="white" padding={2.5}>
      <Container>
        <Flex
          alignItems="center"
          flexDirection={['column', 'row']}
          justifyContent={'space-between'}
        >
          <Box color="primary">
            <Logo boxSize={100} />
          </Box>
          <Heading>Footer</Heading>
        </Flex>
      </Container>
    </Box>
  );
}
