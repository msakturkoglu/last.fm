import { PropsWithChildren } from "react";
import { Container, ContainerTitle } from "./generic-container.css";

export const GenericContainer = ({children, title}: PropsWithChildren<{title?: string}>) => {
    return (
        <Container>
            <ContainerTitle>{title}</ContainerTitle>
            {children}
        </Container>
    )
}