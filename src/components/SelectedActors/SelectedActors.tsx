import React, { ReactElement } from 'react';
import { Box } from 'components/Box';
import { Text } from 'components/Text';
import { useActors } from 'hooks/useActors';
import { ThumbInfo } from 'components/ThumbInfo';
import { MovieList } from 'components/MovieList';
import { IStateValue } from 'types/definitions';

export function SelectedActors(): ReactElement {
    const { actors, removeActor, commonHistory } = useActors();

    return (
        <Box
            p='15px'
            mt='20px'
            display='flex'
            flexDirection='column'
            alignItems='center'
        >
            <Box
                display='flex'
                flexWrap='wrap'
                alignItems='center'
                justifyContent='center'
            >
                {actors?.map((actor: IStateValue) => (
                    <ThumbInfo
                        key={actor.value.toString()}
                        image={
                            actor.raw.profile_path
                                ? `https://image.tmdb.org/t/p/w500/${actor.raw.profile_path}`
                                : null
                        }
                        title={actor.label}
                        alt={`${actor.label}, artist know for ${actor.raw.known_for_department}`}
                        width='100px'
                        height='100px'
                        onClick={() => removeActor(actor.value)}
                    />
                ))}
            </Box>
            <Text as='h3' fontWeight='bold' color='gray.700'>
                MOVIES:
            </Text>
            <MovieList data={commonHistory} />
        </Box>
    );
}
