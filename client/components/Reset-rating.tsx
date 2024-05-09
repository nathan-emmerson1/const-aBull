import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export function MyComponent() {
  const [rating, setRating] = useState(0)

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate)
  }

  const handleReset = () => {
    // Set the initial value
    setRating(0)
  }

  return (
    <div className="App">
      {/* set initial value */}
      <Rating onClick={handleRating} initialValue={rating} />

      <button onClick={handleReset}>reset</button>
    </div>
  )
}
