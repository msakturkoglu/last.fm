import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Card } from '../../Card';
import { ListItemImage, ListItemInfoWrapper, ListItemWrapper } from "./list-item.css";

export type TListItemProps = {
        children?: React.ReactNode;
        image?: string;
        listeners?: number;
        playcount?: number;
        _link?: string;
}

type TLinkWrapperProps = {
    children?: React.ReactNode;
    link: string;
}

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const LinkWrapper: React.FC<TLinkWrapperProps> = ({children, link}) => <StyledLink to={link}>{children}</StyledLink>


export const ListItem: React.FC<TListItemProps> = ({children, image, listeners, playcount, _link}) => {

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
            _link ? <LinkWrapper link={_link}><Content /></LinkWrapper> : <Content /> 
        }
        </>
    );
}