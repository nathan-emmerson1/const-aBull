import { useParams } from 'react-router-dom'
import data from '../../data/greatwalks'

export default function Walks() {
  const { walk } = useParams()

  if (walk == undefined) {
    throw new Error()
  }

  const currentWalk = data[walk]

  return (
    <>
      <h1>{walk}</h1>
      <img src={`images/${currentWalk.image}`} alt="" />
    </>
  )
}
