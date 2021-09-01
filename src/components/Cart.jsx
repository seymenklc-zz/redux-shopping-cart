import React from 'react';

import { Link } from 'react-router-dom';
import { Box, Grid, GridItem, Heading, Link as ChakraLink } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import CartItem from './CartItem';

const Cart = () => {
    const { cart } = useSelector(state => state.shop);

    if (cart.length === 0) {
        return (
            <Box textAlign='center'>
                <Heading color='blackAlpha.500' as='h2'>
                    There is no item.
                </Heading>
                <Link to='/'>
                    <ChakraLink fontWeight='semibold'>
                        Go back to home page
                    </ChakraLink>
                </Link>
            </Box>
        );
    }

    return (
        <Grid templateColumns="repeat(1, 1fr)" gap={1}>
            {cart?.map(item => (
                <GridItem key={item.id}>
                    <CartItem item={item} />
                </GridItem>
            ))}
        </Grid>
    );
};

export default Cart;
