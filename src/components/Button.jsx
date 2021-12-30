import { Box, Text } from '@chakra-ui/layout'
import React from 'react'

const Button = ({ title, onClick }) => {
    return (
        <Box
            as='button'
            height='24px'
            lineHeight='1.2'
            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            border='1px'
            px='24px'
            width="full" 
            height="50"
            borderRadius='2px'
            fontSize='14px'
            fontWeight='semibold'
            bg='#4d5549'
            borderColor='#ccd0d5'
            color='#ffffff'
            _hover={{ bg: '#000000' }}
            _active={{
                bg: '#4d5549',
                transform: 'scale(0.98)',
                borderColor: '#bec3c9',
            }}
            _focus={{
                boxShadow:
                    '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
            }} 
            onClick={onClick}
        >
            <Text fontSize="12">{title}</Text>
        </Box>
    )
}

export default Button
