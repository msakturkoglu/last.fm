import { useQuery } from "@tanstack/react-query";
import { apiController } from "../service/controllers/lastfm-controller";
import { TTopAlbums } from "../service/models/top-albums-model";


export const useTopAlbums = (artist: string) => {
    return useQuery<TTopAlbums, any, TTopAlbums, string[] >(['topalbums', artist], () => apiController.getTopAlbums(artist));

}