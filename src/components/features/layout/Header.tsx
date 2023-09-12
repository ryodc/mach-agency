import { useState, useEffect } from 'react';

import { Box, Container, Flex } from '@chakra-ui/react';
import { LinkTag } from '@/components/shared/LinkTag';
import { useScroll, motion, useMotionValueEvent } from 'framer-motion';
import Logo from '@/icons/components/Logo';
import Link from 'next/link';

export function Header() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const navbarItems = [
    {
      name: 'blog',
      href: '/blog',
    },
    {
      name: 'item2',
      href: '/item1',
    },
    {
      name: 'item3',
      href: '/item1',
    },
  ];

  function update() {
    if (scrollY?.get() < scrollY?.getPrevious()) {
      setHidden(false);
    } else if (scrollY.get() > 100 && scrollY?.get() > scrollY?.getPrevious()) {
      setHidden(true);
    }
  }
  useEffect(() => {
    return scrollY.onChange(() => update());
  });

  useMotionValueEvent(scrollY, 'change', () => {
    update();
  });

  return (
    <Box
      as={motion.nav}
      color="white"
      bgColor="secondary"
      position="fixed"
      top={0}
      padding={2.5}
      left={0}
      right={0}
      zIndex={1}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ ease: '[0.1, 0.25, 0.3, 1]' }}
      transitionDuration={'0.6'}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -25 },
      }}
    >
      <Container as="nav">
        <Flex
          flexShrink={0}
          alignItems="center"
          flexDirection={['column', 'row']}
          justifyContent={['center', 'space-between', 'space-between']}
        >
          <Link href="/">
            <Box color="primary">
              <Logo boxSize={100} />
            </Box>
          </Link>
          <Flex gap={10}>
            {navbarItems.map(item => {
              return (
                <LinkTag href={item.href} key={crypto.randomUUID()}>
                  {item.name}
                </LinkTag>
              );
            })}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
