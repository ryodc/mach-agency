import { LinkTag } from '@/components/shared/LinkTag';
import { Box, Heading } from '@chakra-ui/react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

type PageProps = {};

export type BlogPost = {
  id: number;
  title: string;
  content: string;
  image: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Example Blog 1',
    content: 'Blog Content',
    image: '/images/linus1.jpeg',
  },
  {
    id: 2,
    title: 'Example Blog 2',
    content: 'Blog Content 2',
    image: '/images/linus2.jpeg',
  },
];

const Page: NextPage<PageProps> = () => (
  <>
    <NextSeo title="Blog" description="An overview of our blog posts" />
    <Box color="black" textAlign="center">
      <Heading>Blog</Heading>
      <ul>
        {blogPosts.map(item => {
          return (
            <li key={item.id}>
              <LinkTag href={`/blog/${item.id}`} color="black">
                {item.title}
              </LinkTag>
            </li>
          );
        })}
      </ul>
    </Box>
  </>
);

export default Page;
