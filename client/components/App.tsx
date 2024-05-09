import Nav from './Nav'
import { Outlet } from 'react-router-dom'

import { useState } from 'react'
// import data from ''

function App() {
  const [state, setState] = useState('Select') // Fixed typo

  const handleNext = () => {
    // Add logic for next button functionality
    // loop throw array
    // shuffle throw the array
  }

  const handleBack = () => {
    // Add logic for back button functionality
  }

  return (
    <div>
      <h1>Welcome to our App</h1>
      <p className="fronttitle">
        You can check out all the best walks in New Zealand
      </p>
      <img
        className="mainheader"
        alt="nz best place"
        src="/images/.png" // Add correct image source
      />
      <li></li>

      <button className="button" onClick={handleBack}>
        Back
      </button>
      <button className="button" onClick={handleNext}>
        Next
      </button>
      <div className="mainheader">
        <Nav />
        <Outlet />
      </div>
    </div>
  )
}

export default App
