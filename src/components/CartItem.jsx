import React from 'react'
import { Flex, Box, Text, Link } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import CartCounter from './CartCounter'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart } from '../features/cart/cartSlice'
import { formatValue } from '../utils'
import getSymbolFromCurrency from 'currency-symbol-map'


const CartItem = ({ item }) => {
    const dispatch = useDispatch(); 
    const currency = useSelector(state => state.product.currency)

    return (<Box my="2" px='4' py="2" bgColor="white" >
        <Flex justifyContent="space-between" alignItems="center">
            <Box>
                <Text fontSize="13" fontWeight="medium">{item.title}</Text>
                <Text fontSize="11">Dry / 12-34 / Two Month</Text>
                <Text fontSize="10">Two month supply shipped every two months</Text>
            </Box>
            <Flex justifyContent="flex-end" direction="column" >
                <Link onClick={() => dispatch(deleteFromCart(item))} alignSelf="flex-end" >&times;</Link>
                <Image src={item.image_url} boxSize="8" />
            </Flex>
        </Flex>
        <Flex justifyContent="space-evenly" alignItems="center">
            <CartCounter item={item} />
            <Text>{getSymbolFromCurrency(currency)}{formatValue(item.quantity * item.price)}</Text>
        </Flex>
    </Box>)
}


export default CartItem
