/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent } from 'tests';
import { MovieList } from '../MovieList';

const optionsMockup = ['Hello World', 'CIE Test Movie'];

describe('<MovieList />', () => {
    it('should render MovieList', () => {
        const { getByText } = render(<MovieList data={optionsMockup} />);
        expect(getByText('CIE Test Movie')).toBeTruthy();
    });

    it('should render no No credits in common', () => {
        const { getByText } = render(<MovieList data={[]} />);
        expect(getByText('No credits in common')).toBeTruthy();
    });
});
