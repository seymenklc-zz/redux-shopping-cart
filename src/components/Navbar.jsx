import React from 'react';

import { Link } from 'react-router-dom';

import { RiShoppingCartLine } from 'react-icons/ri';
import { AiOutlineHome } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';

import { Box, Container, Flex, Heading, IconButton, Spacer } from '@chakra-ui/react';

import ColorMode from './ColorMode';

const Navbar = () => {
    return (
        <Container maxW='container.lg' mb='4'>
            <Box mt='3' bgColor='teal.200' borderRadius={8} p='2' pl='3' borderWidth={3} borderColor='teal.300'>
                <Flex>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <Box borderRadius={17} bgColor='gray.50' p='2'>
                            <Heading as='h1' size='lg'>Shopping Cart</Heading>
                        </Box>
                    </Link>
                    <Spacer />
                    <Link to='/' >
                        <IconButton size='lg' mr='2' aria-label='Home' icon={<AiOutlineHome />} />
                    </Link>
                    <Link to='/cart'>
                        <IconButton size='lg' mr='2' aria-label='Cart' icon={<RiShoppingCartLine />} />
                    </Link>
                    <a href="https://twitter.com/seymennklc">
                        <IconButton size='lg' mr='2' aria-label='twitter' icon={<FiTwitter />} />
                    </a>
                    {/* Theme Component */}
                    <ColorMode />
                </Flex >
            </Box >
        </Container>
    );
};
export default Navbar;;