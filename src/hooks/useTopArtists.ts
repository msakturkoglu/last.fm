import { useInfiniteQuery, UseInfiniteQueryResult } from '@tanstack/react-query'
import { apiController } from '../service/controllers/lastfm-controller'
import { TTopArtists, TTopArtistsKey } from '../service/models/top-artists-model'

export const useTopArtists = (): UseInfiniteQueryResult<TTopArtists, any> => {
    return useInfiniteQuery<TTopArtists, any, TTopArtists, TTopArtistsKey[]>(
        ['artists'],
        async ({ pageParam = 1 }: { pageParam?: number }) => await apiController.getTopArtists(pageParam),
        {
            getNextPageParam: (lastPage: TTopArtists, allPages: TTopArtists[]) => {
                const { page, totalPages } = lastPage.artists['@attr']
                return parseInt(page) <= parseInt(totalPages) ? allPages.length + 1 : undefined
            },
        }
    )
}
