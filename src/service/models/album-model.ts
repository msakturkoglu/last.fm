import { IArtist } from './artists-model'
import { IBaseModel } from './base-model'

export interface IAlbum extends IBaseModel {
    artist: IArtist
}
