import { useState } from 'react'
import { addFavoriteRecipe, removeFavoriteRecipe } from '../../api/user'
import { useProfile } from '../../context/ProfileContext'
import styles from './RecipeCard.module.css'
import { Link } from 'react-router-dom'

const RecipeCard = ({ recipe }) => {
  const { profile } = useProfile()
  const [isFavorite, setIsFavorite] = useState(profile.favRecipes.includes(recipe.id))
  //console.log(profile)

  const handleClick = async (id) => {
    if (profile) {
      try {
        if (isFavorite) {
          await removeFavoriteRecipe(id)
          setIsFavorite(false)
        } else {
          await addFavoriteRecipe(id)
          setIsFavorite(true)
        }
      } catch (error) {
        console.error('Error al realizar la acción:', error.message)
      }
    } else {
      console.error('Profile o token no disponible')
    }
  }
  const formattedIngredients = recipe.ingredients.slice(0, -1).join(', ') + ', ' + recipe.ingredients.slice(-1)[0] + '.'

  return (
    <div className={styles.recipeWrapper}>
      <div className={styles.recipeTop}>
        <button onClick={() => handleClick(recipe._id)} className={styles.favoriteButton}>
          {isFavorite ? '❤️' : '🩶'}
        </button>
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
