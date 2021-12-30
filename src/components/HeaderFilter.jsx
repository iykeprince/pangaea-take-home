import { Box, Flex, Text } from '@chakra-ui/layout'
import React from 'react'
import { Select } from '@chakra-ui/react'

const HeaderFilter = () => {
    return (
        <Flex p="10" justifyContent="space-between" alignItems="center" mx="20" my="16">
            <Box>
                <Text fontSize="5xl">All Products</Text>
                <Text>A 360° look at Lumin</Text>
            </Box>
            <Box>
            <Select placeholder='Filter by' size='lg' borderRadius="0" width="300px" />
            </Box>
        </Flex>
    )
}

export default HeaderFilter
