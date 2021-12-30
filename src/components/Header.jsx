import React, { useContext } from 'react'
import { Box, Flex, Link, Spacer, Text } from '@chakra-ui/layout'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Logo from '../logo.png'
import { useSelector } from 'react-redux'
import { ProductContext } from '../context/product.context'

const Header = () => {
    const totalQuantity = useSelector(state => state.cart.totalQty)
    const { onOpen } = useContext(ProductContext)

    return (
        <Box position="fixed" bgColor="#f6f6f6" width="full" top="0">
        <Flex px="16" py="4" >
            <Flex>
                <Box ><Text letterSpacing="10px" fontSize="22">LUMIN</Text></Box>
                <Box px="3" py="1"><Link fontSize="14">Shop</Link></Box>
                <Box px="3" py="1"><Link fontSize="14">Learn</Link></Box>
            </Flex>
            <Spacer />
            <Flex>
            <Box px="3" py="1"><Link fontSize="14">Account</Link></Box>
                <Flex alignItems="center">
                    <Link onClick={onOpen}><AiOutlineShoppingCart size="20"/></Link><Text alignSelf="flex-start" fontSize="10" fontWeight="medium">{totalQuantity}</Text>
                </Flex>
            </Flex>
        </Flex>
        <hr />
        </Box>
    )
}

export default Header
