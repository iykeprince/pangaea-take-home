import React, { useEffect } from 'react'
import { Box, Grid, GridItem, Center } from '@chakra-ui/layout'
import ProductItem from './ProductItem'

import { useMediaQuery, Spinner } from '@chakra-ui/react'
import { useQuery } from '@apollo/client'
import { useDispatch, useSelector } from 'react-redux'
import ProductCollectionSkeleton from '../components/skeletons/ProductCollectionSkeleton';
import { PRODUCT_CURRENCY_QUERY, PRODUCT_QUERY } from '../queries.graphql';
import { updateProducts } from '../features/product/productSlice'
import ErrorMessage from './ErrorMessage'

const ProductCollection = () => {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)') 
    const dispatch = useDispatch()
    const currency = useSelector(state=> state.product.currency)
    const products = useSelector( state => state.product.items)
    const { loading, error, data } = useQuery(PRODUCT_CURRENCY_QUERY, {
        variables: {
            currency
        },
        pollInterval: 500
    })
      

      useEffect(() => {
          
         if(data) {
             dispatch(updateProducts(data.products))
         }
      }, [data])

    return (
        <Box bgColor="#e3e6e3" px="16" py="10">
             {error && <ErrorMessage message={error} />}
           <Center> {loading && <Spinner /> }</Center>
            <Grid templateColumns={isLargerThan768 ? `repeat(3, 1fr)` : `repeat(2, 1fr)`} gap="10">
                {products.length > 0 && products.map((product, i) => <GridItem key={product.id}>
                    <ProductItem product={product} />
                </GridItem>)
                }
            </Grid>
        </Box>
    )
}

export default ProductCollection
