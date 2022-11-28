import { colors } from './constants/colors'

type TThemeType = 'dark' | 'light'

export interface IThemeOptions {
    name: TThemeType
    background: string
    header: string
    list: string
    listTitle: string
    cardBgPrimary: string
    cardBgSecondary: string
    cardBorder: string
    cardContentText: string
    counters: string
    text: string
}

interface ITheme {
    light: Partial<IThemeOptions>
    dark: Partial<IThemeOptions>
}

export const themes: ITheme = {
    light: {
        name: 'light',
        background: colors.lightGray,
        header: colors.darkGray,
        list: colors.lightGray,
        listTitle: colors.deepPink,
        cardBgPrimary: colors.lightGray,
        cardBgSecondary: colors.white,
        cardBorder: colors.mediumGray,
        cardContentText: colors.black,
        counters: colors.darkGray,
        text: colors.black,
    },

    dark: {
        name: 'dark',
        background: colors.darkMagenta,
        header: '#3e0f3d',
        list: colors.darkMagenta,
        listTitle: colors.pink,
        cardBgPrimary: colors.darkMagenta,
        cardBgSecondary: colors.lightMagenta,
        cardBorder: colors.darkPink,
        cardContentText: colors.fuchsia,
        counters: colors.lightBlue,
        text: colors.white,
    },
}
