import { PropsWithChildren } from "react";
import { ArtistDetailCard, ArtistDetailCardContentWrapper, ArtistDetailDescription, ArtistDetailTitle } from "../../styles/shared-styles";
import { TCardProps } from "../Card/card-types"

type TTopTrackCardProps<T> = PropsWithChildren<TCardProps<T> & {artistName: string; trackName: string}>;

export const TopAlbumsCard = <T extends unknown>({artistName, trackName, ...props}: TTopTrackCardProps<T>) => {
  return (
    <ArtistDetailCard {...props}>
        <ArtistDetailCardContentWrapper>
            <ArtistDetailTitle>{trackName}</ArtistDetailTitle>
            <ArtistDetailDescription>{artistName}</ArtistDetailDescription>
        </ArtistDetailCardContentWrapper>
    </ArtistDetailCard>
  )
}