import React from 'react'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { Grid, GridItem, Box } from '@chakra-ui/layout'

const ProductCollectionSkeleton = () => {
    return (
        <Grid gap="10" templateColumns='repeat(3,1fr)'>
            <GridItem>
                <Box>
                    <Skeleton height='80px' my="2" />
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                </Box>
            </GridItem>
            <GridItem>
                <Box>
                    <Skeleton height='80px' my="2" />
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                </Box>
            </GridItem>
            <GridItem>
                <Box>
                    <Skeleton height='80px'my="2"  />
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                </Box>
            </GridItem>
            <GridItem>
                <Box>
                    <Skeleton height='80px' my="2"  />
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                </Box>
            </GridItem>
            <GridItem>
                <Box>
                    <Skeleton height='80px' my="2" />
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                </Box>
            </GridItem>
            <GridItem>
                <Box>
                    <Skeleton height='80px' my="2" />
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                </Box>
            </GridItem>
        </Grid>
    )
}

export default ProductCollectionSkeleton
