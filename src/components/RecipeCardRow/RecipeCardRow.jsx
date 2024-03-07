import styles from './RecipeCardRow.module.css'
import RecipeCard from '../RecipeCard'
import useSnapScroll from '../../hooks/useSnapScroll'
import CaretLeft from '../icons/CaretLeft'
import CaretRight from '../icons/CaretRight'

export default function RecipeCardRow({ category, categoryRecipes }) {
  const { ref, scroll, limits } = useSnapScroll()

  return (
    <div className={styles.categoriesWrapper}>
      <h2 className={styles.categoriesTitle}>{category}</h2>
      <div className={styles.categoriesCards} ref={ref}>
        {categoryRecipes.map((recipe) => (
          <RecipeCard recipe={recipe} key={`${category}-${recipe._id}`} />
        ))}
      </div>
      {!limits.left && (
        <button className={styles.scrollLeft} onClick={() => scroll(-1)}>
          <CaretLeft />
        </button>
      )}
      {!limits.right && (
        <button className={styles.scrollRight} onClick={() => scroll(+1)}>
          <CaretRight />
        </button>
      )}
    </div>
  )
}
