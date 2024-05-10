/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function Review() {
  //use state to control the state change of form
  const [newReview, setNewReview] = useState('')
  const [rating, setRating] = useState(0)
  // const [useState, setState] = useState('Select')

  //handlechange
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewReview(event.target.value)
  }

  //handlesubmit
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setNewReview('')
  }

  //handleRating
  const handleRating = (rate: number) => {
    setRating(rate)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>How was your experience with this track</p>
        <textarea
          id="review"
          name="review"
          value={newReview}
          defaultValue="Please write your review here"
          onChange={handleChange}
        />
        <div>
          <Rating onClick={handleRating} />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </>
  )
}
//please add this to the .css file to have a beautiful sized textarea. Can't really visualise it since we don't have a css file yet.
//feel free to change the size of this text area.
/* #review {
  width: 300px;
  height: 150px;
}*/
