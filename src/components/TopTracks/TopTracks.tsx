import { useEffect } from 'react'
import { useTopTracks } from '../../hooks'
import { IStatus } from '../../pages/Artist/artist-types'
import { ITrack } from '../../service/models/tracks-model'
import utils from '../../utils'
import { TCardItem } from '../Card/card-types'
import { GenericContainer } from '../GenericContainer'
import { GenericList } from '../GenericList'
import { TopTracksCard } from '../TopTracksCard'

export const TopTracks: React.FC<{ artistName: string; updateStatus?: (status: IStatus) => void }> = ({
    artistName,
    updateStatus,
}): JSX.Element => {
    const renderListItem = (item: ITrack): JSX.Element => {
        const cardItems: TCardItem[] = [
            { title: 'play', value: item.playcount },
            { title: 'listeners', value: item.listeners },
        ]

        return (
            <TopTracksCard
                trackName={item.name}
                artistName={artistName}
                items={cardItems}
                // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions, @typescript-eslint/prefer-nullish-coalescing
                image={utils.getArtistImage(item.image || [], 'medium')}
            />
        )
    }

    const { data, isLoading, isError, isSuccess } = useTopTracks(artistName)

    useEffect(() => {
        updateStatus?.({ tracks: { isLoading, isError } })
    }, [isLoading, isError, updateStatus])

    return (
        <GenericContainer title="Top Tracks">
            <GenericList
                data={data?.toptracks.track}
                {...{ isLoading, isError, isSuccess }}
                keyExtractor={({ name }) => name.replace(' ', '-').toLowerCase()}
                renderItem={renderListItem}
            />
        </GenericContainer>
    )
}
