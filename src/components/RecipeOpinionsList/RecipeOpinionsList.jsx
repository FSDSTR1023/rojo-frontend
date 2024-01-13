import styles from './RecipeOpinionsList.module.css'
import Opinion from '../Opinion'

export default function RecipeOpinionsList({ opinions, recipeId }) {
  return (
    <div>
      <h3>Opinions</h3>
      <div className={styles.bentoGrid}>
        {opinions.map((opinion) => (
          <div className={styles.bentoElement}>
            <Opinion key={opinion._id} {...opinion} recipeId={recipeId} />
          </div>
        ))}
        <div className={styles.bentoElement}>
          <Opinion key="addOpinion" add={true} recipeId={recipeId} />
        </div>
      </div>
    </div>
  )
}
