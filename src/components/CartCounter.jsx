import React from 'react'
import { Flex, Box, Text, Link, Spacer } from '@chakra-ui/layout'
import { addToCart, removeFromCart } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux';

const CartCounter = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <Box border="1" borderColor="black" as="div" >
            <Flex justifyContent="center" alignItems="center"  >
                <Link fontSize="12" p="4" onClick={() => dispatch(removeFromCart(item))} >-</Link>
                <Spacer />
                <Text fontSize="12" fontWeight="medium">{item.quantity}</Text>
                <Spacer />
                <Link fontSize="12" p="4" onClick={() => dispatch(addToCart(item))}>+</Link>
            </Flex>
        </Box>
    )
}


export default CartCounter
