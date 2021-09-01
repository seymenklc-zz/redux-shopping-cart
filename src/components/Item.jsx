import React from 'react';

import { Box, Button, Image, Stack, Text, useToast } from '@chakra-ui/react';

import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/shoppingActions';

import { truncateOverview } from '../utils/truncateOverview';
import { Toast } from '../utils/Toast';

const Item = ({ item }) => {
    const toast = useToast();
    const dispatch = useDispatch();

    const handleAddToCart = (id) => {
        const cartItems = {
            id: item.id,
            img: item.image,
            price: item.price,
            desc: item.description,
            category: item.category
        };
        if (id === item.id) dispatch(addToCart(cartItems));
        Toast(toast, 'Item added to your cart.', true);
    };

    return (
        <Box
            display={{ md: "flex" }}
            borderColor='teal.300'
            maxWidth="32rem"
            minHeight='13rem'
            borderWidth={3}
            borderRadius={15}
            margin={2}
            p={4}
        >
            <Image
                src={item?.image}
                style={{ width: 200, height: 200 }}
                borderWidth={3}
                borderRadius={15}
                borderColor='teal.300'
                margin="auto"
                alt="item"
            />
            <Stack
                align={{ base: "center", md: "stretch" }}
                textAlign={{ base: "center", md: "left" }}
                mt={{ base: 4, md: 0 }}
                ml={{ md: 6 }}
            >
                <Text
                    my={1}
                    display="block"
                    fontSize="3xl"
                    lineHeight="normal"
                    fontWeight="semibold"
                >
                    ${item.price}
                </Text>
                <Text my={2} color="gray.500">
                    {item?.category.toUpperCase()}
                </Text>
                <Text my={2} color="gray.800" >
                    {truncateOverview(item?.description, 50)}
                </Text>
                <Button
                    my={2}
                    maxWidth="100px"
                    bgColor='gray.50'
                    onClick={() => handleAddToCart(item.id)}
                >
                    Add To Cart
                </Button>
            </Stack>
        </Box>
    );
};

export default Item;
