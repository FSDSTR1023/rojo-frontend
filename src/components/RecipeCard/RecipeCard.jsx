import styles from './RecipeCard.module.css'

export default function RecipeCard({
  title,
  imageUrl = 'https://www.foodandwine.com/thmb/YlgBj_G9a_psYSzA3gfU6gx9A3w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bucatini-with-mushroom-ragu-dandelion-greens-and-tarragon-FT-RECIPE0421-3a5f0d29f7264f5e9952d4a3a51f5f58.jpg',
  difficulty,
  preparationTime,
  categories,
}) {
  const difficultyColor = {
    EASY: '#b2f78d',
    MEDIUM: '#ffce6d',
    HARD: '#ff6161',
  }

  const preparationTimeColor = {
    FAST: '#b2f78d',
    MODERATE: '#ffce6d',
    LONG: '#ff6161',
  }

  const categoryColor = {
    Healthy: '#91f78d',
    'Gluten Free': '#f7f08d',
    Vegan: '#8db7f7',
    Vegetarian: '#8df7c6',
    'High Calories': '#f78dad',
    'Low Calories': '#8df7dd',
    'Lactose Free': '#8d8ff7',
    Paleo: '#c48df7',
    Keto: '#f78de9',
    'High Protein': '#f7d68d',
    'Quick Meals': '#e4f78d',
    'High Fiber': '#cd8df7',
  }

  return (
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
  )
}
