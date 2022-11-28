import { IArtist } from './artists-model'
import { IBaseModel } from './base-model'

interface TStreamOption { text: boolean; fulltrack: boolean }

export interface ITrack extends IBaseModel {
    duration: number
    streamable: TStreamOption
    artist: IArtist
}
