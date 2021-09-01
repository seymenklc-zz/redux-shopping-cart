import React from 'react';

import { Grid, GridItem, Spinner } from "@chakra-ui/react";
import { useFetch } from '../hooks/useFetch';

import Item from './Item';

const ItemList = () => {
    const { data, error, loading } = useFetch('https://fakestoreapi.com/products');

    return (
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            {!error && !loading ?
                data?.map(item => (
                    <GridItem key={item.id}>
                        <Item item={item} />
                    </GridItem>
                )) : <Spinner ml='100%' />}
        </Grid>
    );
};

export default ItemList;
