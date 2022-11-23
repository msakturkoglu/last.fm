import React from 'react'
import styled from 'styled-components';
import { PATHS } from '../../utils/constants/route-constants';
import ListItem from '../List/ListItem'
import { TListItemProps } from '../List/ListItem/ListItem';

const ArtistInfoWrapper = styled.div`
  margin: 0 1.3rem;
  display: flex;
  flex-direction: column;
  flex: 1;

  & p {
    font-weight: 100;
    font-size: 0.8rem;
    border-bottom: 1px solid #e0d8d8;
    padding-bottom: 0.1rem;
  }

  & h1 {
    font-weight: 600;
    padding: 0.8rem 0;
  }
`;


export const ArtistListItem: React.FC<TListItemProps & {artistName: string}> = (props) => {
  
  return (
    <ListItem {...props} _link={`${PATHS.ARTIST}/${props.artistName}`}>
      <ArtistInfoWrapper>
        <p>Artist</p>
        <h1>{props.artistName}</h1>
      </ArtistInfoWrapper>
    </ListItem>
  )
}
