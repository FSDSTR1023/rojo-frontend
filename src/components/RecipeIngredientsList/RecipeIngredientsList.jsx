import styles from './RecipeIngredientsList.module.css'

export default function RecipeIngredientsList({ ingredients }) {
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
