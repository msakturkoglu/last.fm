import { IBaseModel } from "./base-model";

type TArtistImage = {
    "#text": string;
    size: string;
}

export interface IArtist extends IBaseModel {
    streamable: boolean;
    image: TArtistImage[];
}