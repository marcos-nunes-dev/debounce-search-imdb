import React, { useState, ReactElement } from 'react';

const ActorsContext = React.createContext([] as any);

interface IProps {
    children?: React.ReactNode;
}

const ActorsProvider = ({ children }: IProps): ReactElement => {
    const [state, setState] = useState([]);

    return (
        <ActorsContext.Provider value={[state, setState]}>
            {children}
        </ActorsContext.Provider>
    );
};

export { ActorsContext, ActorsProvider };
