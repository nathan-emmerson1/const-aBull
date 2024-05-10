import image from '../../Images/nz.png'
import { Link, Outlet } from 'react-router-dom'
import NorthIsland from './NorthIsland'
import SouthIsland from './SouthIsland'
import Home from './Home'

function App() {
  return (
    <div>
      {/* <Home /> */}
      <Outlet />
    </div>
  )
}

export default App
