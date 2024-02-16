import styles from './RecipeIngredientsList.module.css'
import { useRecipe } from '../../context/RecipeContext'

export default function RecipeIngredientsList() {
  const { ingredients } = useRecipe()

  return (
    <div>
      <h3 className={styles.sectionTitle}>Ingredients</h3>
      <ul className={styles.ingredients}>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  )
}
