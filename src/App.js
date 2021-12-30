import { Box, Text } from '@chakra-ui/layout';
import React from 'react';


import Header from './components/Header';
import HeaderFilter from './components/HeaderFilter';
import ProductCollection from './components/ProductCollection';



import { useDisclosure } from '@chakra-ui/hooks';

import { ProductProvider } from './context/product.context';
import CartDrawer from './components/CartDrawer';




function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <ProductProvider value={{ onOpen }} >
      <Box bgColor="#f5f5f4">
        <Header />
        <HeaderFilter />
        <ProductCollection />
        <CartDrawer isOpen={isOpen} onClose={onClose} />
      </Box>
    </ProductProvider>
  );
}

export default App;
