import { Heading, Stack, Text, Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

const Page: NextPage = () => {
  return (
    <>
      <NextSeo title="Home Page" description="This is the homepage" />
      <Stack spacing="4" color="black">
        <Box textAlign="center">
          <Heading as="h1">Homepage Heading</Heading>
          <Text>Homepage Text</Text>
        </Box>
      </Stack>
    </>
  );
};

export default Page;
