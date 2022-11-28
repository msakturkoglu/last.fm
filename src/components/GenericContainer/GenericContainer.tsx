import { PropsWithChildren } from 'react'
import { Container, ContainerTitle } from './generic-container.css'

export const GenericContainer = ({ children, title, ...rest }: PropsWithChildren<{ title?: string }>): JSX.Element => {
    return (
        <Container {...rest}>
            <ContainerTitle>{title}</ContainerTitle>
            {children}
        </Container>
    )
}
