import { useQuery } from '@tanstack/react-query';
import { ArtistListItem } from '../../components/ArtistList/ArtistListItem';
import List from '../../components/List';
import { apiController } from '../../service/controllers/lastfm-controller';
import { TTopArtists, TTopArtistsKey } from '../../service/models/top-artists-model';
import { HomeContainer } from './Home.css';


export const Home = () => {
  const {isError, isLoading, data, isSuccess} = useQuery<TTopArtists, any, TTopArtists, TTopArtistsKey[] >(['artists'], apiController.getTopArtists);

 // const [topArtists, setTopArtists] = useState<TTopArtists>();

  /*
  useEffect(() => {
    const fetchData = async () => {
      const data = await apiController.getTopArtists();

      if (data) {
        console.log(data);
        setTopArtists(data);
      }
    }

    fetchData();

  }, []);
*/

const renderContent = () => {

  return data?.artists.artist.map((artist,idx) => {
    const image = artist.image.find(item => item.size === "medium")?.['#text'];

    return (<ArtistListItem key={`artist-list-${idx}`} artistName={artist.name} image={image} playcount={artist.playcount} listeners={artist.listeners} />)
    });
};

if (isError) {
  return <div>Error fetching data!</div>
}

if (isLoading) {
  return <div>Loading...</div>
}

  return (
    <HomeContainer>
      
      { isSuccess 
      ?
        <List>
          {renderContent()}
        </List>
        : 
        null
      }
    </HomeContainer>
  );
};