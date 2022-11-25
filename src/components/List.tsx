import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const ListElement = styled.ul``;
const ListItem = styled.li``;


type TListDataProps<T> = {
    data?: T[];
    isLoading?: boolean;
    isError?: boolean;
    isSuccess?: boolean;
    itemKey?: string;
    renderItem: (item: T) => React.ReactNode;
    keyExtractor: (item: T) => string;
}

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