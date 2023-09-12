import { ParsedUrlQuery } from 'querystring';

import { Box, Heading, Text } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { BlogPost, blogPosts } from '../blog';
import { LinkTag } from '@/components/shared/LinkTag';
import { OptimizedImage } from '@/components/shared/Image';

type PageProps = {
  post: BlogPost;
};

type PageParams = ParsedUrlQuery & {
  postId: string;
};

const Page: NextPage<PageProps> = ({ post }) => (
  <>
    <NextSeo title={post.title} description={post.content} />
    <Box>
      <Heading as="h1" color="black">
        {post.title}
      </Heading>
      <OptimizedImage src={post.image} alt={post.title} width={100} height={100} />
      <Text as="p">{post.content}</Text>
      <LinkTag href="/blog" color="black">
        Go Back
      </LinkTag>
    </Box>
  </>
);

export const getStaticProps: GetStaticProps<PageProps, PageParams> = async ctx => {
  const post = blogPosts.find(item => item.id === Number(ctx.params?.postId));

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: blogPosts.map(item => ({ params: { postId: String(item.id) } })),
    fallback: false,
  };
};

export default Page;
