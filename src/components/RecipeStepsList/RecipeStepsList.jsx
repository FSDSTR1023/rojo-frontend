import styles from './RecipeStepsList.module.css'
import Step from '../Step/Step'
import { useRecipe } from '../../context/RecipeContext'

export default function RecipeStepsList() {
  const { preparation } = useRecipe()

  return (
    <div>
      <h3>Steps</h3>
      <div className={styles.steps}>
        {preparation.map(({ _id, title, description }, i) => (
          <Step key={_id} title={title} description={description} stepNumber={i + 1} />
        ))}
      </div>
    </div>
  )
}
