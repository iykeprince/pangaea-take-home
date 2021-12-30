import React, { useContext } from 'react'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import getSymbolFromCurrency from 'currency-symbol-map'

import Button from './Button'

import ProductImage from '../product_img.png'
import { useSelector, useDispatch } from 'react-redux'
import { ProductContext } from '../context/product.context'
import { addToCart } from '../features/cart/cartSlice'
import { formatValue } from '../utils'

const ProductItem = ({ product }) => {
    const { onOpen } = useContext(ProductContext)
    const dispatch = useDispatch()
    const currency = useSelector(state => state.product.currency)

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
            <Text fontSize="14px">From: {getSymbolFromCurrency(currency)}{formatValue(product.price)}</Text>
            <Button title={`Add to Cart`} onClick={() => handleClick(product)} />
        </Flex>
    )
}

export default ProductItem
