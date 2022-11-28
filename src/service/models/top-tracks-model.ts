import { IAttributes } from './attributes-model'
import { ITrack } from './tracks-model'

export type TTopTracksKey = 'toptracks'

export type TTopTracks = {
    [key in TTopTracksKey]: {
        track: ITrack[]
        attr: IAttributes
    }
}
