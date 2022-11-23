import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Card } from '../../components/Card';
import { apiController } from '../../service/controllers/lastfm-controller';
import { ArtistContainer, ArtistImage } from './Artist.css';

type TLocationState = {
  artistName: string;
  artistImage?: string;
}

export const Artist = () => {

  
  const location = useLocation();

  const state = location.state as TLocationState;

  console.log(state);
  
  //const {isError, isLoading, data, isSuccess} = useQuery<TTopArtists, any, TTopArtists, TTopArtistsKey[] >(['artists'], apiController.getTopArtists);



  return (
    <ArtistContainer>
      <Card>
        <h1>{state.artistName}</h1>
        {/* <ArtistImage src={image} alt="" /> */}
      </Card>
    </ArtistContainer>
  )
}
