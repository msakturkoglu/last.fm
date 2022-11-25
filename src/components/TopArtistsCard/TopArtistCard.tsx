import { PropsWithChildren } from "react";
import { Card } from "../Card";
import { TCardProps } from "../Card/card-types"
import { ArtistName, ArtistWrapper } from "./top-artists-card.css";

type TArtistCardProps<T> = PropsWithChildren<TCardProps<T> & {artistName: string}>;

export const TopArtistCard = <T extends unknown>({artistName, ...props}: TArtistCardProps<T>) => {
  return (
    <Card {...props}>
        <ArtistWrapper>
            <p>Artist</p>
            <ArtistName>{artistName}</ArtistName>
        </ArtistWrapper>
    </Card>
  )
}