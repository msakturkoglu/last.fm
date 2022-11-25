import { useQuery } from "@tanstack/react-query";
import { apiController } from "../service/controllers/lastfm-controller";
import { TTopTracks } from "../service/models/top-tracks-model";



export const useTopTracks = (artist: string) => {
    return useQuery<TTopTracks, any, TTopTracks, string[] >(['toptracks', artist], () => apiController.getTopTracks(artist));

}