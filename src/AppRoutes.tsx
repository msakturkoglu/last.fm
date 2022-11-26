import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { Artist } from './pages/Artist';
import { Home } from './pages/Home';
import { PATHS } from './utils/constants/route-constants';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  }

  #root {
    display: flex;
    justify-content: center;;
  }
`;

export default function AppRoutes() {
  return (
    <>
    <GlobalStyles />
    <BrowserRouter>
    <Routes>
        <Route path={PATHS.HOME} element={<Home />} />
        <Route path={PATHS.ARTIST} element={<Artist />} />
    </Routes>
    </BrowserRouter>
    </>
    
  )
}
