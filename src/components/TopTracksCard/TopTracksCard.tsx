import { PropsWithChildren } from "react";
import { Card } from "../Card";
import { TCardProps } from "../Card/card-types"
import { TrackArtistName, TrackContentWrapper, TrackName } from "./top-tracks-card.css";

type TTopTrackCardProps<T> = PropsWithChildren<TCardProps<T> & {artistName: string; trackName: string}>;
export const TopTracksCard = <T extends unknown>({artistName, trackName, ...props}: TTopTrackCardProps<T>) => {
  return (
    <Card {...props}>
        <TrackContentWrapper>
            <TrackName>{trackName}</TrackName>
            <TrackArtistName>{artistName}</TrackArtistName>
        </TrackContentWrapper>
    </Card>
  )
}
