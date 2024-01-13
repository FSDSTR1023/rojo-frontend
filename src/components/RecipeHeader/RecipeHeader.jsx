import styles from './RecipeHeader.module.css'

export default function RecipeHeader({ difficulty, preparationTime, categories, imageUrl }) {
  return (
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
  )
}
