import styled from 'styled-components';

export const ListItemWrapper = styled.li``;

export const ListItemImage = styled.img`
  width: 50px;
  height: 100%;
  background: linear-gradient(#dE685E, #EE786E);
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid lightpink;
`;

export const ListItemInfoWrapper = styled.div`
display: grid;
grid-template-columns: 3.2rem auto auto;
grid-template-rows: auto auto;
grid-row-gap: 0.3rem;
padding: 8px;
font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
monospace;
font-size: 0.6rem;

    & span {
      text-align: right;
      margin-left: 0.2rem;
      color: #999999;
    }

    & label {
      font-weight: bold;
      color: deeppink;
    }
`;

