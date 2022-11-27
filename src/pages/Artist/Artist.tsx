import { ArtistCard, ArtistContainer, ArtistName, ArtistSection } from './Artist.css';
import { useLocationState } from '../../hooks';
import { TArtistPayload } from './artist-types';
import { TopAlbums } from '../../components/TopAlbums';
import { TopTracks } from '../../components/TopTracks';


export const Artist = () => {
  const {artistName, image} = useLocationState<TArtistPayload>();

  return (
    <ArtistContainer>
      <ArtistCard image={image} >
        <ArtistName>{artistName}</ArtistName>
      </ArtistCard>

      <ArtistSection>
        <TopAlbums artistName={artistName} />
        <TopTracks artistName={artistName} />
      </ArtistSection> 
    </ArtistContainer>
  )
}
