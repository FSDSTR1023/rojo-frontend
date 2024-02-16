import RecipeCard from '../../components/RecipeCard/RecipeCard'
import styles from './Explore.module.css'
import { useEffect, useState, useRef } from 'react'
import { getAllRecipes } from '../../api/recipe'
import Favorite from '../../components/Favorite'

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
      {Object.entries(groupedRecipes).map(([category, categoryRecipes]) => (
        <div className={styles.categoriesWrapper} key={category}>
          <h2 className={styles.categoriesTitle}>{category}</h2>
          <div className={styles.categoriesCards} ref={categoriesRef}>
            {categoryRecipes.map((recipe) => (
              <Favorite key={recipe._id} recipe={recipe}>
                <RecipeCard recipe={recipe} load={load} setLoad={setLoad} />
              </Favorite>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
