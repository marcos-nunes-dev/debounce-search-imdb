import React, { ReactElement } from 'react';
import { Box } from 'components/Box';
import { Text } from 'components/Text';
import { SearchActor } from 'components/SearchActor';
import { SelectedActors } from 'components/SelectedActors';

export default function Home(): ReactElement {
    return (
        <Box as='section' display='flex' flexDirection='column'>
            <Box
                as='header'
                backgroundColor='primary'
                p='10'
                display='flex'
                justifyContent='center'
            >
                <Text
                    as='h1'
                    fontSize='50px'
                    fontWeight='bold'
                    color='gray.700'
                    textAlign='center'
                >
                    CREDIT CROSSOVER
                </Text>
            </Box>
            <Box
                as='main'
                display='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                alignSelf='center'
                width='80%'
                maxWidth='800px'
            >
                <Box width='100%' mt='10'>
                    <SearchActor />
                    <SelectedActors />
                </Box>
            </Box>
        </Box>
    );
}
