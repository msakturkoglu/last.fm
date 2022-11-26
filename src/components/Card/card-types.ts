export type TCardItem = {
    title?: string;
    value?: number | string;
}

export type TCardLink<PayloadType> = {
    url: string;
    payload?: PayloadType;
}

export type TCardProps<LinkPayloadType> = {
    style?: React.CSSProperties;
    imageStyle?: React.CSSProperties;
    children?: React.ReactNode;
    image?: string;
    items?: TCardItem[];
    link?: TCardLink<LinkPayloadType>
}