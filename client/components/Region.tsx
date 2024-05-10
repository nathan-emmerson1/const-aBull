import { useParams } from 'react-router-dom'
import data from '../../data/region'

export default function Region() {
  const { region } = useParams()

  if (region == undefined) {
    throw new Error()
  }

  const currentRegion = data[region]

  return (
    <>
      <h1>{region}</h1>
      {/* <img src={`images/${currentRegion.image}`} alt="" /> */}
    </>
  )
}
