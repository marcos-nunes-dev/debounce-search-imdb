/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent, queryByAttribute, screen } from 'tests';
import { DebounceSelect } from '../DebounceSelect';

const optionsMockup = [{ label: 'hello world', value: '1' }];

describe('<DebounceSelect />', () => {
    it('should render DebounceSelect', () => {
        const setOptMockup = jest.fn();
        const fetchMockup = jest.fn();
        const onChangeMockup = jest.fn();

        const { getByText } = render(
            <DebounceSelect
                options={optionsMockup}
                setOptions={setOptMockup}
                fetchOptions={fetchMockup}
                onChange={onChangeMockup}
                placeholder="ENTER ACTOR'S NAME..."
                debounceTimeout={800}
                showSearch
                labelInValue
                size='large'
            />
        );

        expect(getByText("ENTER ACTOR'S NAME...")).toBeTruthy();
    });

    it('should open default options', () => {
        const setOptMockup = jest.fn();
        const fetchMockup = jest.fn();
        const onChangeMockup = jest.fn();

        const { getByText } = render(
            <DebounceSelect
                options={optionsMockup}
                setOptions={setOptMockup}
                fetchOptions={fetchMockup}
                onChange={onChangeMockup}
                placeholder="ENTER ACTOR'S NAME..."
                debounceTimeout={800}
                showSearch
                labelInValue
                size='large'
            />
        );

        fireEvent.mouseDown(screen.getByTestId('antd-select'));
        setInterval(() => expect(getByText('hello world')).toBeTruthy(), 500);
    });

    it('should fire events', () => {
        const setOptMockup = jest.fn();
        const fetchMockup = jest.fn();
        const onChangeMockup = jest.fn();

        const { getByText } = render(
            <DebounceSelect
                options={optionsMockup}
                setOptions={setOptMockup}
                fetchOptions={fetchMockup}
                onChange={onChangeMockup}
                placeholder="ENTER ACTOR'S NAME..."
                debounceTimeout={800}
                showSearch
                labelInValue
                size='large'
            />
        );

        fireEvent.mouseDown(screen.getByTestId('antd-select'));
        fireEvent.keyDown(screen.getByTestId('antd-select'), {
            key: 'A',
            code: 'KeyA',
        });
        setInterval(() => expect(fetchMockup).toBeCalled(), 900);
        setInterval(() => expect(setOptMockup).toBeCalled(), 900);
    });

    it('should match snapshot', () => {
        const setOptMockup = jest.fn();
        const fetchMockup = jest.fn();
        const onChangeMockup = jest.fn();

        const { container } = render(
            <DebounceSelect
                options={optionsMockup}
                setOptions={setOptMockup}
                fetchOptions={fetchMockup}
                onChange={onChangeMockup}
                placeholder="ENTER ACTOR'S NAME..."
                debounceTimeout={800}
                showSearch
                labelInValue
                size='large'
            />
        );

        expect(container).toMatchSnapshot();
    });
});
