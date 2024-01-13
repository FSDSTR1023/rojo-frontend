import styles from './RecipeOpinionsList.module.css'
import Opinion from '../Opinion'
import OpinionAdd from '../Opinion/OpinionAdd'

export default function RecipeOpinionsList({ opinions, recipeId }) {
  return (
    <div>
      <h3>Opinions</h3>
      <div className={styles.bentoGrid}>
        {opinions.map((opinion) => (
          <div key={opinion._id} className={styles.bentoElement}>
            <Opinion {...opinion} recipeId={recipeId} />
          </div>
        ))}
        <div className={styles.bentoElement}>
          <OpinionAdd recipeId={recipeId} />
        </div>
      </div>
    </div>
  )
}
