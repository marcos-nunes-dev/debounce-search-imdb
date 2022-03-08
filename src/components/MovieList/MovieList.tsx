import React, { ReactElement } from 'react';
import { Box } from 'components/Box';
import { Text } from 'components/Text';

interface Props {
    data?: string[];
}

export function MovieList({ data }: Props): ReactElement {
    return (
        <Box display='flex' flexDirection='column' textAlign='center'>
            {data && data.length > 0 ? (
                data.map((movie: string, id: number) => (
                    <Text
                        key={id}
                        as='a'
                        href={`https://www.imdb.com/find?q=${movie}`}
                        target='_blank'
                        color='gray.300'
                    >
                        {movie}
                    </Text>
                ))
            ) : (
                <Text color='gray.300'>No credits in common</Text>
            )}
        </Box>
    );
}
