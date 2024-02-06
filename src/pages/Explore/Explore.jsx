import RecipeCard from '../../components/RecipeCard/RecipeCard'
import styles from './Explore.module.css'
import { useEffect, useState, useRef } from 'react'
import { getAllRecipes } from '../../api/recipe'
import { Link } from 'react-router-dom'
import CreateRecipe from '../CreateRecipe/CreateRecipe'

export default function Explore() {
  const [recipes, setRecipes] = useState([])
  const [load, setLoad] = useState(false)
  const categoriesRef = useRef(null)

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await getAllRecipes()
        const data = response.data
        setRecipes(data)
      } catch (error) {
        console.error('Error al obtener recetas:', error)
      }
    }
    fetchRecipes()
  }, [load])

  const groupedRecipes = groupRecipesByCategory(recipes)

  function groupRecipesByCategory(recipes) {
    if (!recipes || recipes.length === 0) {
      return {} // Retorna un objeto vacío si no hay recetas
    }

    return recipes.reduce((acc, recipe) => {
      recipe.categories.forEach((category) => {
        if (!acc[category]) {
          acc[category] = []
        }
        acc[category].push(recipe)
      })
      return acc
    }, {})
  }

  return (
    <div>
      <Link className={styles.createButton} to="/recipe/create">
        +
      </Link>
      {Object.entries(groupedRecipes).map(([category, categoryRecipes]) => (
        <div className={styles.categoriesWrapper} key={category}>
          <h2 className={styles.categoriesTitle}>{category}</h2>
          <div className={styles.categoriesCards} ref={categoriesRef}>
            {categoryRecipes.map((recipe) => (
              <RecipeCard recipe={recipe} key={recipe._id} load={load} setLoad={setLoad} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
