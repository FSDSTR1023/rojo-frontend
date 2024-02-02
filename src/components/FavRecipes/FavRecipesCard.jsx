import styles from './FavRecipes.module.css'
import { Link } from 'react-router-dom'

export default function FavRecipesCard({ recipe }) {
  return (
    <div className={styles.card}>
      <img src={recipe.imageUrl} alt="favRecipe-image" />
      <div className={styles.display}>
        <p className={styles.title}>{recipe.title}</p>
        <Link to={`/recipe/${recipe._id}`} className={styles.buttonPreparation}>
          Open Recipe
        </Link>
      </div>
    </div>
  )
}
