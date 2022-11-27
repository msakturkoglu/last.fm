import { config } from "../../utils/constants/config";
import { TTopAlbums } from "../models/top-albums-model";
import { TTopArtists } from "../models/top-artists-model";
import { TTopTracks } from "../models/top-tracks-model";


type TConfigType = string| undefined;

enum ELastFMEndpoints {
   "artist.getTopAlbums",
    "chart.getTopArtists",
    "artist.getTopTracks",
}

type TLastFMEnpoint = keyof typeof ELastFMEndpoints;

interface IAPIController {
    getTopArtists: (page: number) =>  Promise<TTopArtists>;
    getTopAlbums: (artist: string) => Promise<TTopAlbums>;
    getTopTracks: (artist: string) => Promise<TTopTracks>;
}

interface IIArtistInput { 
    artist: string;
};


class APIController implements IAPIController {

    private apiUrl: TConfigType;
    private apiKey: TConfigType;
    private apiFormat: TConfigType;

    constructor() {
        this.apiUrl = config.apiUrl;
        this.apiKey = config.apiKey;
        this.apiFormat = config.apiFormat;
    }   

    private async fetchData<T, K=undefined>(endPoint: TLastFMEnpoint, params?: K): Promise<T> {

        const _params = params ? '&' + new URLSearchParams(params).toString() : '';

        const apiUrl = `${this.apiUrl}/?method=${endPoint.toLowerCase()}&api_key=${this.apiKey}&format=${this.apiFormat}` + _params;
        console.log(apiUrl);
        
        const res = await fetch(apiUrl);

        return res.json();
    }

    getTopArtists = (page: number) => {
        return this.fetchData<TTopArtists, {page: number}>("chart.getTopArtists", {page});
    }

    getTopAlbums = (artist: string) => {
        return this.fetchData<TTopAlbums, IIArtistInput>("artist.getTopAlbums",{artist});
    }

    getTopTracks = (artist: string) => {
        return this.fetchData<TTopTracks, IIArtistInput>("artist.getTopTracks", {artist});
    }
}

export const apiController = new APIController();