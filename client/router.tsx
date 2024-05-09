/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import Home from './components/Home'
import Greatwalks from './components/Greatwalks.tsx'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<App />} />,
    <Route index element={<Home />} />,
    <Route path="greatwalks/:greatwalksId" element={<GreatWalks />} />,
  ])
)

export default router
