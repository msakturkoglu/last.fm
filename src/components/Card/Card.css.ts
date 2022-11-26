import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(#f8f8f8, #fff);
    box-shadow: 0 8px 16px -8px rgba(0,0,0,0.4);
    border-radius: 6px;
    overflow: hidden;
   // margin: 1.5rem;
    padding: 15px;
    border: 1px solid #f3f3f3;
`;

export const CardIemsWrapper = styled.div`
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    display: flex;
    flex-direction: column;
    padding: 8px;
    font-size: 0.6rem;

    display: grid;
    grid-template-columns: 3.2rem auto auto;
    grid-row-gap: 0.4rem;
`;

// export const CardItemRow = styled.div``;

export const CardItemTitle = styled.label`
    font-weight: bold;
    color: deeppink;
`;
export const CardItemValue = styled.span`
    text-align: right;
    margin-left: 0.2rem;
    color: #999999;
`;