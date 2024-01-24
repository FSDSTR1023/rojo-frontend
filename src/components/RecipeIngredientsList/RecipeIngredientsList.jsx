import styles from './RecipeIngredientsList.module.css'
import { useRecipe } from '../../context/RecipeContext'
import Tag from '../Tag'

export default function RecipeIngredientsList() {
  const { ingredients } = useRecipe()

  return (
    <div>
      <h3 className={styles.sectionTitle}>Ingredients</h3>
      <ul className={styles.ingredients}>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>
            <Tag>{ingredient}</Tag>
          </li>
        ))}
      </ul>
    </div>
  )
}
