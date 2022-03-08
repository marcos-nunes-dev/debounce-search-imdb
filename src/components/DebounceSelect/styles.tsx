import styled from 'styled-components';
import { Box } from 'components/Box';
import { theme } from 'styled-tools';

export const SelectWrapper = styled(Box)`
    width: 100%;
    .ant-select-selector,
    .ant-select {
        width: inherit;
    }
    .ant-select-show-search.ant-select-single:not(.ant-select-customize-input)
        .ant-select-selector {
        background: ${theme('colors.gray.50')};
        border: none;
        border-radius: 50px;
    }
    .ant-select-selection-placeholder {
        opacity: 1;
        color: ${theme('colors.gray.300')} !important;
        text-align: center;
    }
`;
