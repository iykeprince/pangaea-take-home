import { Box, Grid, GridItem, Text } from '@chakra-ui/layout'
import React from 'react'
import ProductItem from './ProductItem'

import { useMediaQuery } from '@chakra-ui/react'

const ProductCollection = ({ products }) => {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)') 
    return (
        <Box bgColor="#e3e6e3" px="16" py="10">
            <Grid templateColumns={isLargerThan768 ? `repeat(3, 1fr)` : `repeat(2, 1fr)`} gap="10">
                {products.map((product, i) => <GridItem key={product.id}>
                    <ProductItem product={product} />
                </GridItem>)
                }
            </Grid>
        </Box>
    )
}

export default ProductCollection
