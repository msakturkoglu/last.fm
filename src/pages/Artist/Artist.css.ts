import styled from 'styled-components';
import { ArtistDetailCard } from '../../styles/shared-styles';
import { device } from '../../utils';

export const ArtistCard = styled(ArtistDetailCard)`
    min-height: 3em;

    @media ${device.laptopL} {
      min-height: 5em;
    }
`;

export const ArtistContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    margin-top: 4rem;
    overflow: hidden;
    height: 650px;
    width: 100%;
    padding: 0.8rem;

    @media ${device.tablet} {
        font-size: 21px;
    }

    @media ${device.laptop} {
        height: 750px;
    }

    @media ${device.laptopL} {
       height: 950px;
    }

    @media ${device.desktopL} {
      height: 1800px;
    }
`;
   

export const ArtistName = styled.h1`
    font-weight: 100;
    font-size: 1rem;
    padding: 0.3rem;
    flex: 1;
    padding-top: 0;

    @media ${device.tablet} {
        font-size: 1.5rem;
        padding: 1rem;
        padding-top: 0;
    }
    
    @media ${device.laptop} {
        font-size: 2rem;
        padding: 1.2rem;
        padding-top: 0;
        width: 80%;
    }
`;

export const ArtistSection = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: scroll;
    
    margin-top: 31px;
    border-top: 1px solid #e3e3e3;
    padding-top: 1rem;
    width: 100%;

  // Switch to rows on large devices
  @media ${device.laptop}{
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 13px;
    width: 100%;
  }
`;

export const Information = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.text}
`;