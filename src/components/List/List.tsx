import React from "react"
import { ListWrapper } from "./list.css"

type Props = {
    children?: React.ReactNode;
}

export const List: React.FC<Props> = ({children}) => {

    return (
        <ListWrapper>
            {children}
        </ListWrapper>
    )
}