import styled from 'styled-components';
import { device } from '../../utils';

export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(${props => props.theme.cardBgPrimary + ',' +  props.theme.cardBgSecondary});
    box-shadow: 0 8px 16px -8px rgba(0,0,0,0.4);
    border-radius: 6px;
    overflow: hidden;
    /* padding: 15px; */
    border: 1px solid ${props => props.theme.cardBorder};
    margin: 0;
    padding: 0.5rem;
    flex: 1;
    /* width: auto; */

    & img {
        height: 2.5rem;
    }


    @media ${device.tablet} {

      & img {
            height: 3.5rem;
        }
    }

    @media ${device.laptop} {
      min-height : 3.5rem;
      justify-content: flex-start;
      padding: 1rem;
        width: -webkit-fill-available;
        & img {
            height: 3.5rem;
        }
    }

    @media ${device.laptopL} {
        width: -webkit-fill-available;
        & img {
            height: 5.5rem;
        }
    }
`;

export const CardIemsWrapper = styled.div`
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    padding: 8px;
    display: grid;
    grid-template-columns: 1.8em 0.3em auto;
    grid-row-gap: 0.4rem;

    @media ${device.laptop} {
        font-size: 2.5rem;
    }

    @media ${device.laptopL} {
        font-size: 3rem;
    }

    & label {
        font-weight: bold;
        color: deeppink;
        font-size: 0.3em;
    }

    & span {
        text-align: right;
        margin-left: 0.2rem;
        font-size: 0.3em;
    }

`;

export const CardItemTitle = styled.label`
    text-align: right;
`;

export const CardItemValue = styled.span`
    color: ${props => props.theme.counters}
`;