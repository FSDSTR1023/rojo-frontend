import styles from './RecipeOpinionsList.module.css'
import Opinion from '../Opinion'
import { useRecipe } from '../../context/RecipeContext'

export default function RecipeOpinionsList() {
  const { opinions, rating } = useRecipe()

  return (
    <div>
      <h3>Opinions {rating.toFixed(2)}/5</h3>
      <div className={styles.bentoGrid}>
        {opinions.map((opinion) => (
          <div key={opinion._id} className={styles.bentoElement}>
            <Opinion {...opinion} />
          </div>
        ))}
        <div className={styles.bentoElement}>
          <Opinion isAdd />
        </div>
      </div>
    </div>
  )
}
