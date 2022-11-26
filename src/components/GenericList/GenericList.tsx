import { PropsWithChildren } from 'react';
import { ListElement, ListItem } from './generic-list-css';
import { TListDataProps } from './generic-list-types';

export const GenericList = <T extends unknown >({
    data, 
    isLoading, 
    isError, 
    isSuccess, 
    renderItem, 
    keyExtractor
}: PropsWithChildren<TListDataProps<T>>) => {

    if (isLoading) return <div>Data loading...</div>
    if (isError) return <div>Data fetch error!</div>
    
    return (
       <ListElement>        
        {
            isSuccess ? data?.map(item => (
                <ListItem key={keyExtractor(item)}>
                    {renderItem(item)}
                </ListItem>
                )
            
            ) : null
        }
        </ListElement>
    )
    }