import styles from './RecipeCardRow.module.css'
import RecipeCard from '../RecipeCard'
import useSnapScroll from '../../hooks/useSnapScroll'

export default function RecipeCardRow({ category, categoryRecipes }) {
  const { ref, scroll } = useSnapScroll()

  return (
    <div className={styles.categoriesWrapper}>
      <h2 className={styles.categoriesTitle}>{category}</h2>
      <div className={styles.categoriesCards} ref={ref}>
        {categoryRecipes.map((recipe) => (
          <RecipeCard recipe={recipe} key={`${category}-${recipe._id}`} />
        ))}
      </div>
      <button className={styles.scrollLeft} onClick={() => scroll(-1)}>
        -
      </button>
      <button className={styles.scrollRight} onClick={() => scroll(+1)}>
        +
      </button>
    </div>
  )
}
