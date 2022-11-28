import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { apiController } from '../service/controllers/lastfm-controller'
import { TTopTracks } from '../service/models/top-tracks-model'

export const useTopTracks = (artist: string): UseQueryResult<TTopTracks, any> => {
    return useQuery<TTopTracks, any, TTopTracks, string[]>(
        ['toptracks', artist],
        async () => await apiController.getTopTracks(artist)
    )
}
