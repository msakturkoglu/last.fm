import short from 'short-uuid';
import { useTopArtists } from "../../hooks";
import { TArtistPayload } from "../../pages/Artist/artist-types";
import { IArtist } from "../../service/models/artists-model";
import utils, { PATHS } from "../../utils";
import { TopArtistCard } from "../TopArtistsCard";
import { TCardItem } from "../Card/card-types";
import { GenericList } from "../GenericList";
import { useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";

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

  const { data, isLoading, isError, isSuccess, fetchNextPage} = useTopArtists();

  const {ref, inView} = useInView({rootMargin: "150px", threshold: 1});

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  const artistList =  useMemo(() => data?.pages.flatMap(page => page.artists.artist), [data?.pages]);

  return (
    <div>
     <GenericList
        data={artistList}
        {...{isLoading, isError, isSuccess}}
        keyExtractor={() => short.generate()}
        renderItem={renderListItem}
       />
        <p ref={ref}>Loading more...</p>
      </div>
  )};