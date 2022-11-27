import { useTopTracks } from "../../hooks";
import { ITrack } from "../../service/models/tracks-model";
import utils from "../../utils";
import { TCardItem } from "../Card/card-types";
import { GenericContainer } from "../GenericContainer";
import { GenericList } from "../GenericList";
import { TopTracksCard } from "../TopTracksCard";

export const TopTracks: React.FC<{artistName: string}> = ({artistName}) => {

  const renderListItem = (item: ITrack) => {
    const cardItems: TCardItem[] = [
      {title:"play", value: item.playcount},
      {title:"listeners", value: item.listeners}
    ]

    return (
      <TopTracksCard 
        trackName={item.name}
        artistName={artistName} items={cardItems}
        image={utils.getArtistImage(item.image || [], "medium")}
      />
    )
  }
  
  const {data, isLoading, isError, isSuccess} = useTopTracks(artistName);

  return (
    <GenericContainer title="Top Tracks">
      <GenericList 
          data={data?.toptracks.track}
          {...{isLoading, isError, isSuccess}}
          keyExtractor={({name}) => name.replace(' ', '-').toLowerCase()}
          renderItem={renderListItem}
        />
    </GenericContainer>
  )};