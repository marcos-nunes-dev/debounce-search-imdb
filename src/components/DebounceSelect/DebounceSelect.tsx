import React, { useMemo, useRef } from 'react';
import { SelectWrapper } from './styles';
import { Select as AntdSelect } from 'antd';
import { SelectProps } from 'antd/es/select';
import debounce from 'lodash/debounce';
import { IActor } from 'types/definitions';

export interface DebounceSelectProps<ValueType = any>
    extends Omit<SelectProps<ValueType>, 'options' | 'children'> {
    fetchOptions: (search: string) => Promise<ValueType[]>;
    debounceTimeout?: number;
    options?: ValueType[];
    setOptions: React.Dispatch<React.SetStateAction<any>>;
    onChange: (newValue: unknown, arr: unknown) => void;
}

export function DebounceSelect<
    ValueType extends {
        key?: string;
        label: React.ReactNode;
        value: string | number;
    } = any
>({
    fetchOptions,
    debounceTimeout = 800,
    options,
    setOptions,
    onChange,
    ...props
}: DebounceSelectProps) {
    const fetchRef = useRef(0);

    const debounceFetcher = useMemo(() => {
        const loadOptions = (value: string) => {
            fetchRef.current += 1;
            const fetchId = fetchRef.current;

            value &&
                fetchOptions(value).then((newOptions: IActor[]) => {
                    if (fetchId !== fetchRef.current) return;
                    setOptions(
                        newOptions.slice(0, 10).map((actor: IActor) => ({
                            label: actor.name,
                            value: actor.id,
                            raw: actor,
                        }))
                    );
                });
        };
        return debounce(loadOptions, debounceTimeout);
    }, [fetchOptions, debounceTimeout]);

    return (
        <SelectWrapper>
            <AntdSelect<ValueType>
                filterOption={false}
                onSearch={debounceFetcher}
                notFoundContent={null}
                showArrow={false}
                options={options}
                // Documentation error on listHeight type
                // @ts-ignore
                listHeight='100%'
                onChange={onChange}
                data-testid={'antd-select'}
                {...props}
            />
        </SelectWrapper>
    );
}
