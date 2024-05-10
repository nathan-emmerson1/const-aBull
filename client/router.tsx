/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import Home from './components/Home'
import GreatWalks from './components/Walks.tsx'
import Region from './components/Region.tsx'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<App />} />,
    <Route index element={<Home />} />,
    <Route path="walks/:walk" element={<GreatWalks />} />,
    <Route path="regions/:region" element={<Region />} />,
  ])
)

export default router
