import { deleteRecipe } from '../../api/recipe'
import styles from './RecipeCard.module.css'
import { Link } from 'react-router-dom'

const RecipeCard = ({ recipe, load, setLoad }) => {
  const handleClick = async (id) => {
    await deleteRecipe(id)
    setLoad(!load)
  }

  const formattedIngredients = recipe.ingredients.slice(0, -1).join(', ') + ', ' + recipe.ingredients.slice(-1)[0] + '.'

  return (
    <div className={styles.recipeWrapper}>
      <img className={styles.image} src={recipe.imageUrl} alt="recipe-image" />
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
