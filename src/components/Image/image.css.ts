import styled from 'styled-components'

export const StyledImage = styled.img`
    background: linear-gradient(#de685e, #ee786e);
    overflow: hidden;
    border-radius: 50%;
    border: 1px solid lightpink;
    width: ${(props) => props.width || 'auto'};
    height: -webkit-fill-available;
    flex-shrink: 0;
`
