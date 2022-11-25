import { ArtistContainer, ArtistName, ArtistSection } from './Artist.css';
import { useLocationState } from '../../hooks';
import { Card } from '../../components/Card';
import { TArtistPayload } from './artist-types';
import { TopAlbums } from '../../components/TopAlbums';
import { TopTracks } from '../../components/TopTracks';
// import { TopAlbums } from '../../components/Lists/TopAlbums';
// import { TopTracks } from '../../components/Lists/TopTracks';

export const Artist = () => {

  const {artistName, image} = useLocationState<TArtistPayload>();

  return (
    <ArtistContainer>
      <Card image={image} >
        <ArtistName>{artistName}</ArtistName>
      </Card>

      <ArtistSection>
        <TopAlbums artistName={artistName} />
        <TopTracks artistName={artistName} />
      </ArtistSection> 
    </ArtistContainer>
  )
}
