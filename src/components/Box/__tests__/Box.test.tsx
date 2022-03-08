/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import { Box } from '../Box';

const text = 'Its a box';

describe('<Box />', () => {
    it('should render Header', () => {
        const { getByText } = render(<Box>{text}</Box>);
        expect(getByText(text)).toBeTruthy();
    });
});
