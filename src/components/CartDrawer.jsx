import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import { Flex, Box, Text, Link, Spacer, Center } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { Spinner, Select } from '@chakra-ui/react'

import { useDispatch, useSelector } from 'react-redux'
import Button from './Button'

import CartItem from './CartItem'
import { useQuery } from '@apollo/client'
import { CURRENCIES_QUERY } from '../queries.graphql'
import { ArrowBackIcon } from '@chakra-ui/icons'




const CartDrawer = ({ isOpen, onClose }) => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalPrice = useSelector(state => state.cart.totalPrice)

    const { loading, error, data } = useQuery(CURRENCIES_QUERY)

    const handleProceedCheckout = () => {
        alert('Proceed to checkout')
    }
    console.log('currencies', data)

    return (
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            size="md"
        >
            <DrawerOverlay />
            <DrawerContent bgColor="#f5f5f4">
                {/* <DrawerCloseButton /> */}
                <DrawerHeader><Center>My Shopping Cart</Center></DrawerHeader>

                <Flex justifyContent="space-between" px="8">
                    <Link border="2" borderColor="blue" borderRadius="100" onClick={onClose}><ArrowBackIcon /></Link>
                    {loading ? <Spinner /> : <Select variant='unstyled' width="50" >
                        {data.currency.map((currency, i) => <option key={i} value={currency}>{currency}</option>)}
                    </Select>}
                </Flex>

                <DrawerBody>
                    {cartItems.map((item, i) => <CartItem key={i} item={item} />)}
                </DrawerBody>
                <Box px="6">
                    <Flex justifyContent="space-between" alignItems="center">
                        <Text>SUB TOTAL</Text>
                        <Text>${totalPrice}</Text>
                    </Flex>
                </Box>
                <DrawerFooter>

                    <Button title="PROCEED TO CHECKOUT" onClick={handleProceedCheckout} />
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default CartDrawer
