import styles from './Explore.module.css'
import { Link } from 'react-router-dom'
import { groupRecipesByCategory } from '../../utils/recipe'
import useRecipes from '../../hooks/useRecipes'
import Filters from '../../components/Filters/Filters'
import RecipeCardRow from '../../components/RecipeCardRow/RecipeCardRow'

export default function Explore() {
  const { recipes, filters, setFilters } = useRecipes()
  const groupedRecipes = groupRecipesByCategory(recipes)

  return (
    <div>
      <Link className={styles.createButton} to="/recipe/create">
        +
      </Link>
    <div className={styles.container}>
      <Filters filters={filters} setFilters={setFilters} />
      {Object.entries(groupedRecipes).map(([category, categoryRecipes]) => (
        <RecipeCardRow key={category} category={category} categoryRecipes={categoryRecipes} />
      ))}
    </div>
  )
}
