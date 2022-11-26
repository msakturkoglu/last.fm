import styled from 'styled-components';

export const ArtistWrapper = styled.div`
  margin: 0 1.3rem;
  display: flex;
  flex-direction: column;
  flex: 1;

  & p {
    font-weight: 100;
    font-size: 0.8rem;
    border-bottom: 1px solid #e0d8d8;
    padding-bottom: 0.1rem;
    width: 50%
  }
`;

export const ArtistName = styled.h1`
    font-weight: 600;
    padding: 0.8rem 0;
`;