import { useState } from 'react'
import { useProfile } from '../../context/ProfileContext'
import styles from './RecipeCard.module.css'
import { Link } from 'react-router-dom'
import Heart from '../Heart'

const RecipeCard = ({ recipe }) => {
  const formattedIngredients = recipe.ingredients.slice(0, -1).join(', ') + ', ' + recipe.ingredients.slice(-1)[0] + '.'

  function Favorite() {
    const { profile, toggleFavorite } = useProfile()

    if (!profile) return

    const [isFavorite, setIsFavorite] = useState(profile.favRecipes.includes(recipe._id))

    const handleClick = async (id) => {
      await toggleFavorite(id)
      setIsFavorite((f) => !f)
    }

    return (
      <button onClick={() => handleClick(recipe._id)} className={styles.favoriteButton}>
        <Heart favorite={isFavorite} />
      </button>
    )
  }

  return (
    <div className={styles.recipeWrapper}>
      <div className={styles.recipeTop}>
        <Favorite />
        <img className={styles.image} src={recipe.imageUrl} alt="recipe-image" />
      </div>
      <div className={styles.recipeContent}>
        <div>
          <h3 className={styles.title}>{recipe.title}</h3>
          <p className={styles.ingredients}>Ingredients: {formattedIngredients}</p>
        </div>
        <div className={styles.footer}>
          <div className={styles.difficulty}>
            <p>{recipe.difficulty}</p>
          </div>
          <div className={styles.preparationTime}>
            <p>{recipe.preparationTime}</p>
          </div>
        </div>
        <Link to={`/recipe/${recipe._id}`} className={styles.buttonPreparation}>
          Open Recipe
        </Link>
      </div>
    </div>
  )
}

export default RecipeCard
