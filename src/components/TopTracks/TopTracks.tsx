import { useTopTracks } from "../../hooks";
import { ITrack } from "../../service/models/tracks-model";
import utils from "../../utils";
import { TCardItem } from "../Card/card-types";
import { GenericList } from "../List";
import { TopTracksCard } from "../TopTracksCard";

export const TopTracks: React.FC<{artistName: string}> = ({artistName}) => {

  const renderListItem = (item: ITrack) => {
    const cardItems: TCardItem[] = [
      {title:"playcount", value: item.playcount},
      {title:"listeners", value: item.listeners}
    ]

    return (
      <TopTracksCard 
        artistName={item.name} items={cardItems}
        image={utils.getArtistImage(item.artist.image || [], "medium")} trackName={""}
      />
    )
  }
  
  const {data, isLoading, isError, isSuccess} = useTopTracks(artistName);

  return (

     <GenericList 
        data={data?.toptracks.track}
        {...{isLoading, isError, isSuccess}}
        keyExtractor={({name}) => name.replace(' ', '-').toLowerCase()}
        renderItem={renderListItem}
       />
  )};