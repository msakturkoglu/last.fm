import { useTopAlbums } from "../../hooks";
import { IAlbum } from "../../service/models/album-model";
import utils from "../../utils";
import { TCardItem } from "../Card/card-types";
import { GenericList } from "../List";
import { TopAlbumsCard } from "../TopAlbumsCard";

export const TopAlbums: React.FC<{artistName: string}> = ({artistName}) => {

  const renderListItem = (item: IAlbum) => {
    const cardItems: TCardItem[] = [
      {title:"playcount", value: item.playcount},
      {title:"listeners", value: item.listeners}
    ]

    return (
      <TopAlbumsCard
        artistName={item.artist.name} items={cardItems}
        trackName={item.name}
        image={utils.getArtistImage(item.artist.image || [], "medium")}
        />
    )
  }
  
  const {data, isLoading, isError, isSuccess} = useTopAlbums(artistName);

  return (

     <GenericList 
        data={data?.topalbums.album}
        {...{isLoading, isError, isSuccess}}
        keyExtractor={({name}) => name.replace(' ', '-').toLowerCase()}
        renderItem={renderListItem}
       />
  )};