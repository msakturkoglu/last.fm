import styled from 'styled-components'
import { device } from '../../utils'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 6px;
    width: 100%;
    background-color: ${(props) => props.theme.background};
`

export const ContainerTitle = styled.h1`
    font-weight: 600;
    text-align: center;
    color: ${(props) => props.theme.listTitle};
    padding: 0;
    font-size: 1.2rem;
    padding-bottom: 1rem;

    @media ${device.laptop} {
        padding: 1.2rem;
        font-size: 1.8rem;
    }
`
