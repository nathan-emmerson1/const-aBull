import { useParams } from 'react-router-dom'
import data from '../../data/greatwalks.ts'

function GreatWalks() {
  const { name } = useParams()
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {data.map((walk) => (
          <li key={walk.code}>{walk.name}</li>
        ))}
      </ul>
    </div>
  )
}
export default GreatWalks
