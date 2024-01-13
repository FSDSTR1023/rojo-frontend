import useRecipe from '../../hooks/useRecipe'
import styles from './Recipe.module.css'
import { useParams } from 'react-router-dom'
import { FETCH_STATUS } from '../../constants/fetchStatus'
import RecipeHeader from '../../components/RecipeHeader'
import RecipeStepsList from '../../components/RecipeStepsList'
import RecipeIngredientsList from '../../components/RecipeIngredientsList'
import RecipeOpinionsList from '../../components/RecipeOpinionsList'

export default function Recipe() {
  const { id } = useParams()

  const { recipe, status, error } = useRecipe(id)
  const { title, imageUrl, ingredients, difficulty, preparationTime, categories, preparation, opinions } = recipe

  if (status === FETCH_STATUS.LOADING) {
    return <div>Loading...</div>
  }

  if (status === FETCH_STATUS.ERROR) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      <RecipeHeader
        imageUrl={imageUrl}
        difficulty={difficulty}
        preparationTime={preparationTime}
        categories={categories}
      />

      <h2 className={styles.title}>{title}</h2>

      <div className={styles.contentWrapper}>
        <RecipeStepsList preparation={preparation} />

        <RecipeIngredientsList ingredients={ingredients} />

        <RecipeOpinionsList opinions={opinions} recipeId={id} />
      </div>
    </div>
  )
}
