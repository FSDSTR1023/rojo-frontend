import styles from './Recipe.module.css'
import { FETCH_STATE } from '../../constants/fetchState'
import RecipeHeader from '../../components/RecipeHeader'
import RecipeStepsList from '../../components/RecipeStepsList'
import RecipeIngredientsList from '../../components/RecipeIngredientsList'
import RecipeOpinionsList from '../../components/RecipeOpinionsList'
import { useRecipe } from '../../context/RecipeContext'

export default function Recipe() {
  const { status, error, title } = useRecipe()

  if (status === FETCH_STATE.LOADING) {
    return <div>Loading...</div>
  }

  if (status === FETCH_STATE.ERROR) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      <RecipeHeader />

      <h2 className={styles.title}>{title}</h2>

      <div className={styles.contentWrapper}>
        <RecipeStepsList />

        <RecipeIngredientsList />

        <RecipeOpinionsList />
      </div>
    </div>
  )
}
