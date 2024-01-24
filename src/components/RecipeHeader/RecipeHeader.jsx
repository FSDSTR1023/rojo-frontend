import styles from './RecipeHeader.module.css'
import { useRecipe } from '../../context/RecipeContext'
import Tag from '../Tag'

export default function RecipeHeader() {
  const { difficulty, preparationTime, categories, imageUrl } = useRecipe()

  return (
    <div className={styles.imageWrapper}>
      <img className={styles.image} src={imageUrl} alt="recipe-image" />
      <div className={styles.imageCover}>
        <p>{difficulty}</p>
        <p>{preparationTime}</p>
      </div>

      <div className={styles.categories}>
        {categories.map((category) => (
          <Tag key={category}>{category}</Tag>
        ))}
      </div>
    </div>
  )
}
