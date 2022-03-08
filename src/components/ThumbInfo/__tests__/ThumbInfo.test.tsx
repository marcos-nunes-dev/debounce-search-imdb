/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from 'tests';
import { ThumbInfo } from '../ThumbInfo';

describe('<ThumbInfo />', () => {
    it('should render ThumbInfo', () => {
        const { getByText } = render(
            <ThumbInfo
                image={null}
                title='Jhon Doe'
                alt='hi! im jhon doe'
                width='100px'
                height='100px'
            />
        );
        expect(getByText("Jhon Doe")).toBeTruthy();
    });

    it('should match snapshot', () => {
        const { container } = render(
            <ThumbInfo
                image={null}
                title='Jhon Doe'
                alt='hi! im jhon doe'
                width='100px'
                height='100px'
            />
        );
        expect(container).toMatchSnapshot();
    });
});
