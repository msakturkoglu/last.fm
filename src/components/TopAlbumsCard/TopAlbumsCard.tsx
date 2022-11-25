import { PropsWithChildren } from "react";
import { Card } from "../Card";
import { TCardProps } from "../Card/card-types"
import { TrackName, TrackArtistName } from "../TopTracksCard/top-tracks-card.css";
import { AlbumArtistName, AlbumContentWrapper, AlbumName } from "./top-albums-card.css";


type TTopTrackCardProps<T> = PropsWithChildren<TCardProps<T> & {artistName: string; trackName: string}>;




export const TopAlbumsCard = <T extends unknown>({artistName, trackName, ...props}: TTopTrackCardProps<T>) => {
  return (
    <Card {...props}>
        <AlbumContentWrapper>
            <AlbumName>{trackName}</AlbumName>
            <AlbumArtistName>{artistName}</AlbumArtistName>
        </AlbumContentWrapper>
    </Card>
  )
}