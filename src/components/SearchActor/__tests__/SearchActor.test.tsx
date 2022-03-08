/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from 'tests';
import { SearchActor } from '../SearchActor';

describe('<SearchActor />', () => {
    it('should render SearchActor', () => {
        const { getByText } = render(<SearchActor />);
        expect(getByText("ENTER ACTOR'S NAME...")).toBeTruthy();
    });

    it('should match snapshot', () => {
        const { container } = render(<SearchActor />);
        expect(container).toMatchSnapshot();
    });
});
