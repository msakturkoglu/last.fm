import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    padding: 1rem;
    background-color: ${(props) => props.theme.header};
    box-shadow: 0 8px 16px -8px rgb(0 0 0 / 40%);
    width: -webkit-fill-available;
    position: fixed;
`

export const ChangeThemeButton = styled.button``
