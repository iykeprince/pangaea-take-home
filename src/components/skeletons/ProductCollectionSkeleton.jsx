import React from 'react'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { Grid, GridItem, Box } from '@chakra-ui/layout'

const ProductCollectionSkeleton = () => {
    return (
        <Grid>
            <GridItem>
                <Box>
                    <Skeleton height='80px' />
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                </Box>
            </GridItem>
            <GridItem>
                <Box>
                    <Skeleton height='80px' />
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                </Box>
            </GridItem>
            <GridItem>
                <Box>
                    <Skeleton height='80px' />
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                </Box>
            </GridItem>
        </Grid>
    )
}

export default ProductCollectionSkeleton
