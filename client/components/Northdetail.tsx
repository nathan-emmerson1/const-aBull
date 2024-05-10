import { useParams } from 'react-router-dom'
import data from '../../data/northwalks'
import Review from './Review'
import images from '../../Images/imagesData'

interface Walk {
  code: string
  name: string
  region: string
  distance: string
  duration: string
  difficultyRating: string
  description: string
}
function NorthDetail() {
  const { code } = useParams()
  console.log(data)
  const walk: Walk = data.find((item) => {
    return item.code == code
  })
  const image = images.find((item) => {
    return item.includes(code)
  })
  return (
    <div>
      <h3>{walk?.name}</h3>
      <img src={image} alt="" />
      <ul>
        <li>{walk?.region}</li>
        <li>{walk?.distance}</li>
        <li>{walk?.duration}</li>
        <li>{walk?.difficultyRating}</li>
        <li>{walk?.description}</li>
      </ul>
      <Review />
    </div>
  )
}
export default NorthDetail
