export type TArtistPayload = {artistName: string; image?: string};

type TStatus = {isLoading: boolean; isError: boolean};
export interface IStatus {
  albums?: TStatus;
  tracks?: TStatus;
}
