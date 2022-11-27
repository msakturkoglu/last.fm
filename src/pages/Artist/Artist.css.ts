import styled from 'styled-components';
import { Card } from '../../components/Card';
import { device } from '../../utils';

export const ArtistCard = styled(Card)`
    margin: 0;
    padding: 0.5rem;
    min-height : 3.5rem;
    width: -webkit-fill-available;

    @media ${device.tablet} {
      width: 30rem;
    }
    
    @media ${device.laptop}{
      width: -webkit-fill-available;
      justify-content: flex-start;
      padding: 2rem;
  }
`;

export const ArtistContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    overflow: hidden;
    height: 650px;
    width: 100%;
    padding: 0.8rem;

    @media ${device.tablet} {
        font-size: 21px;
    }

    @media ${device.laptop} {
        margin: 3rem;
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