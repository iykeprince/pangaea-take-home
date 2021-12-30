import React, { useContext } from 'react'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import Button from './Button'

import ProductImage from '../product_img.png'
import { useSelector, useDispatch } from 'react-redux'
import { ProductContext } from '../context/product.context'
import { addToCart } from '../features/cart/cartSlice'

const ProductItem = ({ product }) => {
    const { onOpen } = useContext(ProductContext)
    const dispatch = useDispatch()

    const handleClick = (product) => {
        dispatch(addToCart({...product, quantity: 1}))
        
        onOpen();
    }

    return (
        <Flex justifyContent="center" alignItems="center" direction="column">
            <Image 
                boxSize="full"
                src={product.image_url} 
                alt="product image"  
                width="200px"
                height="200px"
            />
            <Text fontSize="12px">{product.title}</Text>
            <Text fontSize="14px">From: ${product.price}</Text>
            <Button title={`Add to Cart`} onClick={() => handleClick(product)} />
        </Flex>
    )
}

export default ProductItem
