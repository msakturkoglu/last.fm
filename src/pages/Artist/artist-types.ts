export interface TArtistPayload { artistName: string; image?: string }

interface TStatus { isLoading: boolean; isError: boolean }
export interface IStatus {
    albums?: TStatus
    tracks?: TStatus
}
