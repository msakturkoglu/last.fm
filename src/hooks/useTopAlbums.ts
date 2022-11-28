import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { apiController } from '../service/controllers/lastfm-controller'
import { TTopAlbums } from '../service/models/top-albums-model'

export const useTopAlbums = (artist: string): UseQueryResult<TTopAlbums, any> => {
    return useQuery<TTopAlbums, any, TTopAlbums, string[]>(
        ['topalbums', artist],
        async () => await apiController.getTopAlbums(artist)
    )
}
