import { useContext, useMemo } from 'react';
import { ActorsContext } from 'providers/ActorsContext';
import { message } from 'antd';
import { IStateValue, IKnownFor } from 'types/definitions';

export const useActors = () => {
    const [state, setState] = useContext(ActorsContext);

    const setActor = (value: IStateValue) => {
        if (state.find((actor: IStateValue) => value.value === actor.value)) {
            message.error('Already Selected');
        } else {
            setState([...state, value]);
        }
    };

    const removeActor = (value: number) => {
        setState(state.filter((actor: IStateValue) => actor.value !== value));
    };

    const commonHistory = useMemo(() => {
        const onlyMovies = state?.map((actor: IStateValue) => {
            return actor.raw.known_for.reduce(
                (movies: string[], { title, media_type }: IKnownFor) => {
                    if (media_type === 'movie') {
                        movies.push(title || '');
                    }
                    return movies;
                },
                []
            );
        });

        return onlyMovies?.shift()?.filter((v: string) => {
            return onlyMovies.every((a: string) => {
                return a.indexOf(v) !== -1;
            });
        });
    }, [state]);

    return {
        actors: state,
        setActor,
        removeActor,
        commonHistory,
    };
};
