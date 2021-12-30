import React, { useEffect } from 'react'
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
import { CURRENCIES_QUERY, PRODUCT_CURRENCY_QUERY } from '../queries.graphql'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { updateCurrency, updateProducts } from '../features/product/productSlice'
import { updateCart } from '../features/cart/cartSlice'




const CartDrawer = ({ isOpen, onClose }) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalPrice = useSelector(state => state.cart.totalPrice)
    const currency = useSelector(state => state.product.currency)

    const { loading, error, data } = useQuery(CURRENCIES_QUERY)
    const productByCurrency = useQuery(PRODUCT_CURRENCY_QUERY, {
        variables: {currency},
        pollInterval: 500,
    })

    useEffect(() => {
        if(productByCurrency.data){
            console.log('this is called in cartDrawer')
            dispatch(updateProducts(productByCurrency.data.products))
            dispatch(updateCart(productByCurrency.data.products))
        }
    },[productByCurrency.data])

    const handleProceedCheckout = () => {
        alert('Proceed to checkout')
    }
    
    const handleChangeCurrency = e => {
        const selectedCurrency = e.target.value;
        dispatch(updateCurrency(selectedCurrency))
        productByCurrency.refetch({currency: selectedCurrency})
    }
    console.log('refetching example with product by currency', productByCurrency.loading, 'data', productByCurrency.data)

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
                    {loading ? <Spinner /> : <Select variant='unstyled' width="50" onChange={handleChangeCurrency} value={currency}>
                        {data.currency.map((currency, i) => <option key={i} value={currency}>{currency}</option>)}
                    </Select>}
                </Flex>

                <DrawerBody>
                    {cartItems.map((item, i) => <CartItem key={i} item={item} />)}
                </DrawerBody>
                <Box px="6">
                    <Flex justifyContent="space-between" alignItems="center">
                        <Text>SUB TOTAL</Text>
                        <Text>{currency}{totalPrice}</Text>
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
