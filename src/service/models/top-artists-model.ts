import { IArtist } from "./artists-model";
import { IAttributes } from "./attributes-model";

export type TTopArtistsKey = "artists";

export type TTopArtists = {
    [key in TTopArtistsKey]: {
        artist: IArtist[];
        "@attr": IAttributes;
    }
}