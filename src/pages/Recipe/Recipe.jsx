import useRecipe from '../../hooks/useRecipe'
import styles from './Recipe.module.css'
import { useParams } from 'react-router-dom'
import { FETCH_STATUS } from '../../constants/fetchStatus'
import Opinion from '../../components/Opinion'

export default function Recipe() {
  const { id } = useParams()

  const { recipe, status, error } = useRecipe(id)
  const { title, imageUrl, ingredients, difficulty, preparationTime, categories, preparation, opinions } = recipe

  if (status === FETCH_STATUS.LOADING) {
    return <div>Loading...</div>
  }

  if (status === FETCH_STATUS.ERROR) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      <div className={styles.imageWrapper} style={{ backgroundImage: `url(${imageUrl})` }}>
        {/* <img className={styles.image} src={imageUrl} alt="recipe-image" /> */}
        <div className={styles.imageCover}>
          <p>{difficulty}</p>
          <p>{preparationTime}</p>
        </div>

        <div className={styles.categories}>
          {categories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
      </div>

      <h2 className={styles.title}>{title}</h2>

      <div className={styles.contentWrapper}>
        <div className={styles.steps}>
          {preparation.map(({ title, description }, i) => (
            <div key={i}>
              <h3 className={styles.sectionTitle}>{i + 1}</h3>
              <div className={styles.stepContent}>
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className={styles.sectionTitle}>Ingredients</h3>
          <ul className={styles.ingredients}>
            {ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className={styles.opinionsBento}>
          {opinions.map((opinion) => (
            <Opinion key={opinion._id} {...opinion} recipeId={id} />
          ))}
          <Opinion key="addOpinion" add={true} recipeId={id} />
        </div>
      </div>
    </div>
  )
}
