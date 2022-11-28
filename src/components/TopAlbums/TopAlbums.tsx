import { useEffect } from 'react'
import { useTopAlbums } from '../../hooks'
import { IStatus } from '../../pages/Artist/artist-types'
import { IAlbum } from '../../service/models/album-model'
import utils from '../../utils'
import { TCardItem } from '../Card/card-types'
import { GenericContainer } from '../GenericContainer'
import { GenericList } from '../GenericList'
import { TopAlbumsCard } from '../TopAlbumsCard'

export const TopAlbums: React.FC<{ artistName: string; updateStatus?: (status: IStatus) => void }> = ({
    artistName,
    updateStatus,
}) => {
    const renderListItem = (item: IAlbum): JSX.Element => {
        const cardItems: TCardItem[] = [{ title: 'play', value: item.playcount }]

        return (
            <TopAlbumsCard
                artistName={item.artist.name}
                items={cardItems}
                trackName={item.name}
                image={utils.getArtistImage(item?.image || [], 'medium')}
            />
        )
    }

    const { data, isLoading, isError, isSuccess } = useTopAlbums(artistName)

    useEffect(() => {
        updateStatus?.({ albums: { isLoading, isError } })
    }, [isLoading, isError, updateStatus])

    return (
        <GenericContainer title="Top Albums">
            <GenericList
                data={data?.topalbums.album}
                {...{ isLoading, isError, isSuccess }}
                keyExtractor={({ name }) => name.replace(' ', '-').toLowerCase()}
                renderItem={renderListItem}
            />
        </GenericContainer>
    )
}
