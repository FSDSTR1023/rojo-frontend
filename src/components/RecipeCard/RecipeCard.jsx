import { deleteRecipe } from '../../api/recipe'
import styles from './RecipeCard.module.css'
import { useState } from 'react'

const RecipeCard = ({ recipe, load, setLoad }) => {
  const [visiblePreparation, setVisiblePreparation] = useState(false)

  const handleClick = async (id) => {
    await deleteRecipe(id)
    setLoad(!load)
  }

  const formattedIngredients = recipe.ingredients.slice(0, -1).join(', ') + ', ' + recipe.ingredients.slice(-1)[0] + '.'

  console.log(recipe)

  return (
    <div className={styles.recipeWrapper}>
      <div>
        <h3 className={styles.title}>{recipe.title}</h3>
        <p>Ingredients: {formattedIngredients}</p>
      </div>
      {visiblePreparation && (
        <div className={styles.steps}>
          {recipe.preparation.map((step, index) => (
            <div key={index}>
              <h2 className={styles.stepTitle}>{step.title}</h2>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      )}
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
      <button onClick={() => setVisiblePreparation(!visiblePreparation)}>
        {visiblePreparation ? 'Ocultar Preparación' : 'Ver Preparación'}
      </button>
    </div>
  )
}

export default RecipeCard
