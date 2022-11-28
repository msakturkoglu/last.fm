import styled from 'styled-components'
import { Card } from '../components/Card'
import { device } from '../utils'

export const ArtistDetailCard = styled(Card)`
    color: ${(props) => props.theme.cardContentText};

    @media ${device.laptop} {
        max-width: 18em;
        height: 5em;
        width: 90%;
    }

    @media ${device.laptopL} {
        max-width: 27em;
    }
`

export const ArtistDetailCardContentWrapper = styled.div`
    margin: 0.5em 1.3em;
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;

    @media ${device.laptop} {
        margin: 0 0.5em;
        margin-left: 1em;
    }

    @media ${device.laptop} {
        margin-left: 1em;
    }
`

export const ArtistDetailTitle = styled.h1`
    font-weight: 600;
    white-space: nowrap;
    font-size: 0.7em;

    @media ${device.laptop} {
        font-size: 1em;
    }

    @media ${device.laptopL} {
        padding: 0;
    }
`

export const ArtistDetailDescription = styled.p`
    font-size: 0.5em;
    padding: 0.5em 0;
    padding-top: 0.8em;
    width: max-content;

    @media ${device.laptop} {
        font-size: 0.8em;
    }

    @media ${device.laptopL} {
        padding: 0.8em 0;
    }
`
