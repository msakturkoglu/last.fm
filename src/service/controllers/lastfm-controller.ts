import { config } from '../../utils/constants/config'
import { TTopAlbums } from '../models/top-albums-model'
import { TTopArtists } from '../models/top-artists-model'
import { TTopTracks } from '../models/top-tracks-model'

type TConfigType = string | undefined

enum ELastFMEndpoints {
    'artist.getTopAlbums',
    'chart.getTopArtists',
    'artist.getTopTracks',
}

type TLastFMEnpoint = keyof typeof ELastFMEndpoints

interface IAPIController {
    getTopArtists: (page: number) => Promise<TTopArtists>
    getTopAlbums: (artist: string) => Promise<TTopAlbums>
    getTopTracks: (artist: string) => Promise<TTopTracks>
}

interface IIArtistInput {
    artist: string
}

class APIController implements IAPIController {
    private readonly apiUrl: TConfigType
    private readonly apiKey: TConfigType
    private readonly apiFormat: TConfigType

    constructor() {
        this.apiUrl = config.apiUrl
        this.apiKey = config.apiKey
        this.apiFormat = config.apiFormat
    }

    private async fetchData<T, K extends {}>(endPoint: TLastFMEnpoint, params?: K): Promise<T> {
        const _params = params !== undefined ? '&' + new URLSearchParams(params).toString() : ''

        const apiUrl =
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${this.apiUrl}/?method=${endPoint.toLowerCase()}&api_key=${this.apiKey}&format=${this.apiFormat}` + _params

        const res = await fetch(apiUrl)

        return await res.json()
    }

    getTopArtists = async (page: number): Promise<TTopArtists> => {
        return await this.fetchData<TTopArtists, { page: number }>('chart.getTopArtists', { page })
    }

    getTopAlbums = async (artist: string): Promise<TTopAlbums> => {
        return await this.fetchData<TTopAlbums, IIArtistInput>('artist.getTopAlbums', { artist })
    }

    getTopTracks = async (artist: string): Promise<TTopTracks> => {
        return await this.fetchData<TTopTracks, IIArtistInput>('artist.getTopTracks', { artist })
    }
}

export const apiController = new APIController()
