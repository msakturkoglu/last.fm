import styled from 'styled-components';


export const ArtistContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem;
    overflow: hidden;
    height: 650px;
    padding: 1.5rem;
    width: 80%;
`;

export const ArtistName = styled.h1`
    font-weight: 100;
    font-size: 2rem;
    padding: 1.2rem;
    padding-top: 0;
`;

export const ArtistSection = styled.section`
    display: flex;
    justify-content: space-between;
    overflow-y: scroll;
    width: 100%;
    margin-top: 31px;
    border-top: 1px solid #e3e3e3;
    padding-top: 17px;
    position: relative;
`;