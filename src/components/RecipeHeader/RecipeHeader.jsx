import { useContext } from 'react'
import styles from './RecipeHeader.module.css'
import RecipeContext from '../../context/RecipeContext'

export default function RecipeHeader() {
  const { difficulty, preparationTime, categories, imageUrl } = useContext(RecipeContext)

  return (
    <div className={styles.imageWrapper}>
      <img className={styles.image} src={imageUrl} alt="recipe-image" />
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
  )
}
