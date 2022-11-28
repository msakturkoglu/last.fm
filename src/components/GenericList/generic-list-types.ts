export interface TListDataProps<T> {
    data?: T[]
    isLoading?: boolean
    isError?: boolean
    isSuccess?: boolean
    itemKey?: string
    renderItem: (item: T) => JSX.Element
    keyExtractor: (item: T) => string
}
