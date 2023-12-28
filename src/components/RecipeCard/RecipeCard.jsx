import { deleteRecipe } from '../../api/recipe'
import styles from './RecipeCard.module.css'

const RecipeCard = ({ recipe, load, setLoad }) => {
  const handleClick = async (id) => {
    await deleteRecipe(id)
    setLoad(!load)
  }

  console.log(recipe)

  return (
    <div className={styles.recipeWrapper}>
      <div>
        <h3 className={styles.title}>{recipe.title}</h3>
        <p>Ingredients: {recipe.ingredients}</p>
      </div>
      <div className={styles.steps}>
        {recipe.preparation.map((step, index) => (
          <div key={index}>
            <h2 className={styles.stepTitle}>{step.title}</h2>
            <p className={styles.stepDescription}>{step.description}</p>
          </div>
        ))}
      </div>
      <div className={styles.footer}>
        <div className={styles.publicationDate}>
          <p>Publication date: {new Date(recipe.createdAt).toLocaleDateString()}</p>
        </div>
        <div className={styles.difficulty}>
          <p>{recipe.difficulty}</p>
        </div>
        <div className={styles.preparationTime}>
          <p>{recipe.preparationTime}</p>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard
