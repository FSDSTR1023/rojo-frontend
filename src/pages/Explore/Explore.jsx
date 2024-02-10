import styles from './Explore.module.css'
import { groupRecipesByCategory } from '../../utils/recipe'
import useRecipes from '../../hooks/useRecipes'
import Filters from '../../components/Filters/Filters'
import RecipeCardRow from '../../components/RecipeCardRow/RecipeCardRow'

export default function Explore() {
  const { recipes } = useRecipes()
  const groupedRecipes = groupRecipesByCategory(recipes)

  return (
    <div className={styles.container}>
      <Filters />

      {Object.entries(groupedRecipes).map(([category, categoryRecipes]) => (
        <RecipeCardRow key={category} category={category} categoryRecipes={categoryRecipes} />
      ))}
    </div>
  )
}
