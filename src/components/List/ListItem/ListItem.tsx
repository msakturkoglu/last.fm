import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Card } from '../../Card';
import { ListItemImage, ListItemInfoWrapper, ListItemWrapper } from "./list-item.css";

export type TListItemProps = {
        children?: React.ReactNode;
        image?: string;
        listeners?: number;
        playcount?: number;
        link?: string;
        artistName: string;
}

type TLinkWrapperProps<T> = {
    link: string;
    state?: T
}

type TLinkState = {
    artistName: string;
    image?: string;
}

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const LinkWrapper = <T extends TLinkState>({children, link, state}: PropsWithChildren<TLinkWrapperProps<T>>) => <StyledLink to={link} state={state}>{children}</StyledLink>


export const ListItem: React.FC<TListItemProps> = ({children, artistName, image, listeners, playcount, link}) => {

    const Content = () => 
        <ListItemWrapper>
        <Card>
        <ListItemImage src={image} alt="" />
        {children}
        <ListItemInfoWrapper>
            <label>listeners</label>
            <label>:</label>
            <span>{listeners}</span>
            <label>playcount</label>
            <label>:</label>
            <span>{playcount}</span>
        </ListItemInfoWrapper>
        </Card>
    </ListItemWrapper>

    return(
        <>
        {
            
            link ? (<LinkWrapper link={link} state={{artistName, image}}><Content /></LinkWrapper>): <Content /> 
        }
        </>
    );
}