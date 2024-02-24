import styles from './Explore.module.css'
import { groupRecipesByCategory } from '../../utils/recipe'
import useRecipes from '../../hooks/useRecipes'
import Filters from '../../components/Filters/Filters'
import RecipeCardRow from '../../components/RecipeCardRow/RecipeCardRow'

export default function Explore() {
  const { recipes, filters, setFilters } = useRecipes()
  const groupedRecipes = groupRecipesByCategory(recipes)

  return (
    <div>
      <div className={styles.container}>
        <Filters filters={filters} setFilters={setFilters} />
        {Object.entries(groupedRecipes).map(([category, categoryRecipes]) => (
          <RecipeCardRow key={category} category={category} categoryRecipes={categoryRecipes} />
        ))}
      </div>
    </div>
  )
}
