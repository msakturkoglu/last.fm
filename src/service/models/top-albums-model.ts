import { IAlbum } from "./album-model";
import { IAttributes } from "./attributes-model";

type TTopAlbumsKey =  "topalbums";

interface ITopAlbumAttributes extends IAttributes {
    artist: string;
}

export type TTopAlbums = {
    [key in TTopAlbumsKey]: {
        album: IAlbum[];
        attr: ITopAlbumAttributes;
    }
}