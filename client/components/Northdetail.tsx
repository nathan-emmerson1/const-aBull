import { useParams } from 'react-router-dom'
import data from '../../data/northwalks'
function NorthDetail() {
  const { code } = useParams()
  console.log(data)
  const walk = data.find((item) => {
    return item.code == code
  })
  return (
    <div>
      <h3>{walk.name}1223</h3>
      <ul>
        <li>{walk.region}</li>
        <li>{walk.distance}</li>
        <li>{walk?.duration}</li>
        <li>{walk?.difficultyRating}</li>
        <li>{walk?.description}</li>
      </ul>
    </div>
  )
}
export default NorthDetail
