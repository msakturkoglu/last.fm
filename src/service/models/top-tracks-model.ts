import { IAttributes } from "./attributes-model";
import { ITrack } from "./tracks-model";

type TTopTracksKey =  "tracks";

export type TTopTracks = {
    [key in TTopTracksKey]: {
        track: ITrack[];
        attr: IAttributes;
    }
}