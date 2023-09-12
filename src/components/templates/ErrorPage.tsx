import { Heading, Text, Grid, Flex, Box } from '@chakra-ui/react';

import { ErrorProps } from '@/pages/_error';
import Lottie from 'lottie-react';
import loadingAnimation404 from '../../../public/animations/error.json';

export function ErrorPage({ statusCode }: ErrorProps) {
  return (
    <Grid placeItems="center" height="100vh">
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        color="black"
        textAlign="center"
      >
        <Box>
          <Lottie animationData={loadingAnimation404} loop={true} />
        </Box>
        <Heading>Oops... {statusCode ? `| ${statusCode} error` : ''} </Heading>
        <Text>Something went wrong</Text>
      </Flex>
    </Grid>
  );
}
