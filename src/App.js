import { Box, Text } from '@chakra-ui/layout';
import React from 'react';


import Header from './components/Header';
import HeaderFilter from './components/HeaderFilter';
import ProductCollection from './components/ProductCollection';

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import { CloseButton } from '@chakra-ui/close-button';
import { useDisclosure } from '@chakra-ui/hooks';

import { useQuery } from '@apollo/client'
import ProductCollectionSkeleton from './components/skeletons/ProductCollectionSkeleton';
import { ProductProvider } from './context/product.context';
import CartDrawer from './components/CartDrawer';
import { PRODUCT_QUERY } from './queries.graphql';


const ErrorMessage = ({ message }) => <Alert status='error'>
  <AlertIcon />
  <AlertTitle mr={2}>An Error occured!</AlertTitle>
  <AlertDescription>{message}</AlertDescription>
  <CloseButton position='absolute' right='8px' top='8px' />
</Alert>

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { loading, error, data } = useQuery(PRODUCT_QUERY)
  console.log('loading', loading)
  console.log('error', error)
  console.log('data', data)
  return (
    <ProductProvider value={{ onOpen }} >
    <Box bgColor="#f5f5f4">
      <Header />
      <HeaderFilter />
      {error && <ErrorMessage message={error} />}
      {loading ?
        //  <ProductCollectionSkeleton /> 
        <Text>Pleasse wait...</Text>
        : 
          <ProductCollection products={data.products} />
        }

        <CartDrawer isOpen={isOpen} onClose={onClose}  />
    </Box>
    </ProductProvider>
  );
}

export default App;
