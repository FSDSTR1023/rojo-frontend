import { useState } from 'react'
import { useProfile } from '../../context/ProfileContext'
import styles from './RecipeCard.module.css'
import { Link } from 'react-router-dom'
import Heart from '../icons/Heart'
import Information from '../icons/Information'
import DeleteIcon from '../icons/DeleteIcon'

const RecipeCard = ({ recipe }) => {
  const formattedIngredients = recipe.ingredients.slice(0, -1).join(', ') + ', ' + recipe.ingredients.slice(-1)[0] + '.'
  const [isReverse, setIsReverse] = useState(false)

  function Favorite() {
    const { profile, toggleFavorite } = useProfile()

    if (!profile) return

    const [isFavorite, setIsFavorite] = useState(profile.favRecipes.includes(recipe._id))

    const handleClick = async (id) => {
      await toggleFavorite(id)
      setIsFavorite((f) => !f)
    }

    return <Heart favorite={isFavorite} onClick={() => handleClick(recipe._id)} />
  }

  return (
    <div className={styles.recipeWrapper} data-reverse={isReverse}>
      <div className={styles.recipeTop}>
        <div className={styles.info}>
          <Information onClick={() => setIsReverse((prev) => !prev)} />
          <Favorite />
        </div>
        <Link to={`/recipe/${recipe._id}`} className={styles.link}>
          <img className={styles.image} src={recipe.imageUrl} alt="recipe-image" />
          <h3 className={styles.title}>{recipe.title}</h3>
          <div className={styles.gradient} />
        </Link>
      </div>

      <div className={styles.recipeContent}>
        <div className={styles.info}>
          <DeleteIcon onClick={() => setIsReverse((prev) => !prev)} />
          <Favorite />
        </div>
        <Link to={`/recipe/${recipe._id}`}>
          <p className={styles.ingredients}>Ingredients: {formattedIngredients}</p>
          <div className={styles.footer}>
            <div data-value={recipe.difficulty}>
              <p>{recipe.difficulty}</p>
            </div>
            <div data-value={recipe.preparationTime}>
              <p>{recipe.preparationTime}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default RecipeCard
