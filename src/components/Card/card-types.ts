export interface TCardItem {
    title?: string
    value?: number | string
}

export interface TCardLink<PayloadType> {
    url: string
    payload?: PayloadType
}

export interface TCardProps<LinkPayloadType> {
    style?: React.CSSProperties
    imageStyle?: React.CSSProperties
    children?: React.ReactNode
    image?: string
    items?: TCardItem[]
    link?: TCardLink<LinkPayloadType>
}
