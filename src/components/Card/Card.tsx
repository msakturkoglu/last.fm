import React, { PropsWithChildren } from 'react';
import short from 'short-uuid';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Image } from '../Image';
import { TCardItem, TCardLink, TCardProps } from './card-types';
import { CardContainer, CardIemsWrapper, CardItemTitle, CardItemValue } from './Card.css';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const CardItems: React.FC<{items?: TCardItem[]}> = ({items} )=> {
    return (
       <CardIemsWrapper>
            {
                items?.map(({title, value}) => {
                    return value ? (
                <React.Fragment key={short.generate()}>
                    <CardItemTitle>{title}</CardItemTitle>
                    <label>:</label>
                    <CardItemValue>{value}</CardItemValue>
                </React.Fragment>)
                    : null
                })
            }
        </CardIemsWrapper>  
    )
};

const LinkWrapper = <T extends unknown>({children, link}: PropsWithChildren<{link: TCardLink<T>}>) => <StyledLink to={link.url} state={link.payload}>{children}</StyledLink>

export const Card = <LinkPayloadType extends unknown>(props: TCardProps<LinkPayloadType>) => {

    const renderContent = () => (
        <CardContainer {...props}>
            <Image src={props.image} style={props.imageStyle}/>
            { props.children }
            <CardItems items={props.items}/>
        </CardContainer>
    )

    return (
        <>
        {
            props.link?.url ? (<LinkWrapper link={props.link}>{renderContent()}</LinkWrapper>) : renderContent() 
        }
        </>
    )
}