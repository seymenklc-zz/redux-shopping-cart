import React from 'react';

import { Box, Button, Image, Stack, Text, useToast } from '@chakra-ui/react';

import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions/shoppingActions';

import { truncateOverview } from '../utils/truncateOverview';
import { Toast } from '../utils/Toast';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    const toast = useToast();

    const handleDelete = (id) => {
        dispatch(removeFromCart(id));
        Toast(toast, 'Item deleted.', false);
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
            ml='25%'
            p={4}
        >
            <Image
                src={item?.img}
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
                    ${item?.price}
                </Text>
                <Text my={2} color="gray.500">
                    {item?.category.toUpperCase()}
                </Text>
                <Text my={2} color="gray.800" >
                    {truncateOverview(item?.desc, 50)}
                </Text>
                <Button onClick={() => handleDelete(item.id)} bgColor='red.200' my={2}>
                    Remove From Cart
                </Button>
            </Stack>
        </Box>
    );
};

export default CartItem;
