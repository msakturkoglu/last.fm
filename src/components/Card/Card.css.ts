import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const CardIemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CardItemRow = styled.div`
    display: grid;
    grid-template-columns: 100px auto auto;
`;

export const CardItemTitle = styled.label``;
export const CardItemValue = styled.span`
    text-align: right;
`;