import React, { ReactElement } from 'react';
import { Box } from 'components/Box';
import { Text } from 'components/Text';

interface Props {
    key?: string;
    image: string | null;
    title?: string;
    onClick?: any;
    alt?: string;
    width?: string;
    height?: string;
}

export function ThumbInfo({
    image,
    title,
    alt,
    width = '200px',
    height = '200px',
    ...rest
}: Props): ReactElement {
    return (
        <Box
            {...rest}
            display='flex'
            alignItems='center'
            flexDirection='column'
            mx='10px'
            mb='10px'
        >
            <a>
                <Box
                    borderRadius='100%'
                    role='img'
                    aria-label={alt || title || 'image'}
                    background={
                        image
                            ? `url(${image})no-repeat center center /cover`
                            : '#eaeaea'
                    }
                    width={width}
                    height={height}
                    data-testid='thumb-image'
                />
            </a>
            {title && (
                <Text
                    as='h2'
                    color='secondary'
                    fontWeight='bold'
                    fontSize='20px'
                >
                    {title}
                </Text>
            )}
        </Box>
    );
}
