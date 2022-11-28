export interface TImage {
    '#text': string
    size: string
}
export interface IBaseModel {
    name: string
    playcount?: number
    listeners?: number
    url: string
    mbid: string
    image?: TImage[]
}
