import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Card } from '../../components/Card';
import { apiController } from '../../service/controllers/lastfm-controller';
import { ArtistContainer, ArtistImage } from './Artist.css';

type TArtistParams = {
  artistName: string;
}

type TLocationState = {
  artistName: string;
  artistImage?: string;
}

export const Artist = () => {

  //const params = useParams<TArtistParams>();

  const location = useLocation();

  const state = location.state as TLocationState;
  
  //const {isError, isLoading, data, isSuccess} = useQuery<TTopArtists, any, TTopArtists, TTopArtistsKey[] >(['artists'], apiController.getTopArtists);

  /*
  useEffect(() => {

    const fetchData = async () => {
      if (params.artistName) {
        const topAlbums = await apiController.getTopAlbums(params.artistName);
        const topTracks = await apiController.getTopTracks(params.artistName);

        console.log(topAlbums);
        console.log(topTracks);
      }
    } 
    fetchData();
    
  }, [params.artistName])
  */

  return (
    <ArtistContainer>
      <Card>
        <h1>{state.artistName}</h1>
        {/* <ArtistImage src={image} alt="" /> */}
      </Card>
    </ArtistContainer>
  )
}
