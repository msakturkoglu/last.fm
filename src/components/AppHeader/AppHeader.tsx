import { useTheme } from "styled-components"
import { IThemeOptions } from "../../utils/theme";
import { ChangeThemeButton, HeaderContainer } from "./AppHeader.css"

export const AppHeader: React.FC<{changeTheme: () => void}> = ({changeTheme}) => {
    const theme = useTheme() as IThemeOptions;

    return (
        <HeaderContainer>
            <ChangeThemeButton onClick={changeTheme}>{theme.name === "light" ? "Dark Theme" : "Light Theme"}</ChangeThemeButton>
        </HeaderContainer>
    )
}