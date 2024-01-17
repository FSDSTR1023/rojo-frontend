import styles from './RecipeCard.module.css'
import { Link } from 'react-router-dom'
import { difficultyColor, preparationTimeColor, categoryColor } from '../../constants/colors/recipe.colors'

export default function RecipeCard({
  _id: id,
  title,
  imageUrl = 'https://www.foodandwine.com/thmb/YlgBj_G9a_psYSzA3gfU6gx9A3w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bucatini-with-mushroom-ragu-dandelion-greens-and-tarragon-FT-RECIPE0421-3a5f0d29f7264f5e9952d4a3a51f5f58.jpg',
  difficulty,
  preparationTime,
  categories,
}) {
  return (
    <Link to={`/recipe/${id}`}>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={imageUrl} alt="recipe-image" />
        </div>
        <h3 className={styles.title}>{title}</h3>
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
      </div>
    </Link>
  )
}
