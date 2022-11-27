import { PropsWithChildren } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import AppRoutes from "./AppRoutes";
import { AppHeader } from "./components/AppHeader";
import { useAppTheme } from "./hooks/useTheme";
import { themes } from "./utils/theme";


const GlobalStyles = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  }


`;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`;

export const App: React.FC<PropsWithChildren> = ({children}) => {
    const [isDark, toogleTheme] = useAppTheme();

    return (
        <ThemeProvider theme={isDark ? themes.dark : themes.light}>
            <GlobalStyles />
          <AppContainer>
          <AppHeader changeTheme={toogleTheme} />
            <AppRoutes />
          </AppContainer>
        </ThemeProvider>
        )
    };