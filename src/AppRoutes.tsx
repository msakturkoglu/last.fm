import { Routes, Route } from 'react-router-dom'
import { Artist } from './pages/Artist'
import { Home } from './pages/Home'
import { PATHS } from './utils/constants/route-constants'

export default function AppRoutes(): JSX.Element {
    return (
        <Routes>
            <Route path={PATHS.HOME} element={<Home />} />
            <Route path={PATHS.ARTIST} element={<Artist />} />
        </Routes>
    )
}
