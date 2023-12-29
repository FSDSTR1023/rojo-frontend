import useRecipe from '../../hooks/useRecipe'
import styles from './Recipe.module.css'
import { useParams } from 'react-router-dom'
import { difficultyColor, preparationTimeColor, categoryColor } from '../../../public/colors/recipe.colors'
import { FETCH_STATUS } from '../../constants/fetchStatus'

export default function Recipe() {
  const { id } = useParams()

  const { recipe, status, error } = useRecipe(id)
  const { title, imageUrl, ingredients, difficulty, preparationTime, categories, preparation } = recipe

  if (status === FETCH_STATUS.LOADING) {
    return <div>Loading...</div>
  }

  if (status === FETCH_STATUS.ERROR) {
    return <div>Error: {error}</div>
  }

  return (
    <div className={styles.test}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt="recipe-image" />
      </div>

      <div className={styles.complexity}>
        <span style={{ backgroundColor: difficultyColor[difficulty] }}>{difficulty}</span>
        <span style={{ backgroundColor: preparationTimeColor[preparationTime] }}>{preparationTime}</span>
      </div>

      <div className={styles.categories}>
        {categories.map((category) => (
          <span key={category} className={styles.category} style={{ backgroundColor: categoryColor[category] }}>
            {category}
          </span>
        ))}
      </div>

      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>

      {preparation.map(({ title, description }, i) => (
        <div key={i}>
          <h3>{`Step ${i}: ${title}`}</h3>
          <p>{description}</p>
        </div>
      ))}
    </div>
  )
}
