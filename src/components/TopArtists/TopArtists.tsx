import { useTopArtists } from "../../hooks";
import { TArtistPayload } from "../../pages/Artist/artist-types";
import { IArtist } from "../../service/models/artists-model";
import utils, { PATHS } from "../../utils";
import { TopArtistCard } from "../TopArtistsCard";
import { TCardItem } from "../Card/card-types";
import { GenericList } from "../GenericList";

export const TopArtists = () => {

  const renderListItem = (item: IArtist) => {
    const cardItems: TCardItem[] = [
      {title:"playcount", value: item.playcount},
      {title:"listeners", value: item.listeners}
    ]

    const artistPayload: TArtistPayload = {artistName: item.name, image: utils.getArtistImage(item.image || [], "large")};

    return (
      <TopArtistCard 
        artistName={item.name} items={cardItems} 
        image={utils.getArtistImage(item.image || [], "medium")}
        link={{url: PATHS.ARTIST, payload: artistPayload }}
        />
    )
  }
  
  const {data, isLoading, isError, isSuccess} = useTopArtists();

  return (

     <GenericList 
        data={data?.artists.artist}
        {...{isLoading, isError, isSuccess}}
        keyExtractor={({name}) => name.replace(' ', '-').toLowerCase()}
        renderItem={renderListItem}
       />
  )};