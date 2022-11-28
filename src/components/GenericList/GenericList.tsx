import { PropsWithChildren } from 'react'
import { ListElement, ListItem } from './generic-list-css'
import { TListDataProps } from './generic-list-types'

export const GenericList = <T extends unknown>({
    data,
    isLoading,
    isError,
    isSuccess,
    renderItem,
    keyExtractor,
}: PropsWithChildren<TListDataProps<T>>): JSX.Element => {
    if (isLoading ?? false) return <div>Data loading...</div>
    if (isError ?? false) return <div>Data fetch error!</div>

    return (
        <ListElement>
            {isSuccess ?? false
                ? data?.map((item) => <ListItem key={keyExtractor(item)}>{renderItem(item)}</ListItem>)
                : null}
        </ListElement>
    )
}
