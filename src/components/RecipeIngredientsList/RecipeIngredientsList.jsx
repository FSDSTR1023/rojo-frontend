import { useContext } from 'react'
import styles from './RecipeIngredientsList.module.css'
import RecipeContext from '../../context/RecipeContext'

export default function RecipeIngredientsList() {
  const { ingredients } = useContext(RecipeContext)

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
