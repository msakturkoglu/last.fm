import { ArtistContainer, ArtistName, ArtistSection } from './Artist.css';
import { useLocationState } from '../../hooks';
import { Card } from '../../components/Card';
import { TArtistPayload } from './artist-types';
import { TopAlbums } from '../../components/TopAlbums';
import { TopTracks } from '../../components/TopTracks';
// import { TopAlbums } from '../../components/Lists/TopAlbums';
// import { TopTracks } from '../../components/Lists/TopTracks';

const cardStyle: React.CSSProperties = {
  width: "-webkit-fill-available",
  minHeight: "3.5rem", 
  justifyContent: "flex-start", 
  padding: "2rem"
}

export const Artist = () => {

  const {artistName, image} = useLocationState<TArtistPayload>();

  return (
    <ArtistContainer>
      <Card image={image} style={cardStyle} imageStyle={{height: "5.5rem"}}>
        <ArtistName>{artistName}</ArtistName>
      </Card>

      <ArtistSection>
        <TopAlbums artistName={artistName} />
        <TopTracks artistName={artistName} />
      </ArtistSection> 
    </ArtistContainer>
  )
}
