import styles from './RecipeOpinionsList.module.css'
import Opinion from '../Opinion'
import OpinionAdd from '../Opinion/OpinionAdd'
import { useContext } from 'react'
import RecipeContext from '../../context/RecipeContext'

export default function RecipeOpinionsList() {
  const { opinions } = useContext(RecipeContext)

  return (
    <div>
      <h3>Opinions</h3>
      <div className={styles.bentoGrid}>
        {opinions.map((opinion) => (
          <div key={opinion._id} className={styles.bentoElement}>
            <Opinion {...opinion} />
          </div>
        ))}
        <div className={styles.bentoElement}>
          <OpinionAdd />
        </div>
      </div>
    </div>
  )
}
