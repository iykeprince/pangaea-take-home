import React from 'react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'
  import { CloseButton } from '@chakra-ui/close-button';

const ErrorMessage = ({ message }) => (<Alert status='error'>
    <AlertIcon />
    <AlertTitle mr={2}>An Error occured!</AlertTitle>
    <AlertDescription>{message}</AlertDescription>
    <CloseButton position='absolute' right='8px' top='8px' />
</Alert>)

export default ErrorMessage
