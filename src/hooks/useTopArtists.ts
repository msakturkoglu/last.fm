import { useQuery } from "@tanstack/react-query";
import { apiController } from "../service/controllers/lastfm-controller";
import { TTopArtists, TTopArtistsKey } from "../service/models/top-artists-model";

export const useTopArtists = () => {
    return useQuery<TTopArtists, any, TTopArtists, TTopArtistsKey[] >(['artists'], apiController.getTopArtists);

}