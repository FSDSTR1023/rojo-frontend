import styles from './RecipeCardRow.module.css'
import RecipeCard from '../RecipeCard/RecipeCard'

export default function RecipeCardRow({ category, categoryRecipes }) {
  return (
    <div className={styles.categoriesWrapper} key={category}>
      <h2 className={styles.categoriesTitle}>{category}</h2>
      <div className={styles.categoriesCards}>
        {categoryRecipes.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe._id} />
        ))}
      </div>
    </div>
  )
}
