import React, { ReactElement, useState } from 'react';
import { DebounceSelect } from 'components/DebounceSelect';
import { Box } from 'components/Box';
import { useActors } from 'hooks/useActors';
import { fetchActorsList } from 'services/Tmdb';
import { ISelectOption, IStateValue } from 'types/definitions';

export function SearchActor(): ReactElement {
    const [options, setOptions] = useState([]);
    const { setActor } = useActors();

    return (
        <Box>
            <DebounceSelect
                options={options}
                setOptions={setOptions}
                fetchOptions={fetchActorsList}
                onChange={(newValue: ISelectOption, arr: IStateValue) =>
                    setActor(arr)
                }
                placeholder="ENTER ACTOR'S NAME..."
                debounceTimeout={800}
                showSearch
                labelInValue
                size='large'
            />
        </Box>
    );
}
