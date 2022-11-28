import { ArtistCard, ArtistContainer, ArtistName, ArtistSection, Information } from './Artist.css'
import { useLocationState } from '../../hooks'
import { IStatus, TArtistPayload } from './artist-types'
import { TopAlbums } from '../../components/TopAlbums'
import { TopTracks } from '../../components/TopTracks'
import { useCallback, useState } from 'react'

export const Artist = (): JSX.Element => {
    const [status, setStatus] = useState<IStatus>({
        albums: { isLoading: true, isError: false },
        tracks: { isLoading: true, isError: false },
    })

    const updateStatus = useCallback((status: IStatus) => {
        setStatus((prevState) => ({ ...prevState, ...status }))
    }, [])

    const { artistName, image } = useLocationState<TArtistPayload>()
    const message =
        status.albums?.isLoading || status.tracks?.isLoading
            ? 'Loading...'
            : status.albums?.isError || status.tracks?.isError
            ? 'Error fetching data!'
            : null

    return (
        <ArtistContainer>
            {message ? (
                <Information>{message}</Information>
            ) : (
                <ArtistCard image={image}>
                    <ArtistName>{artistName}</ArtistName>
                </ArtistCard>
            )}

            <ArtistSection>
                <TopAlbums artistName={artistName} updateStatus={updateStatus} />
                <TopTracks artistName={artistName} updateStatus={updateStatus} />
            </ArtistSection>
        </ArtistContainer>
    )
}
