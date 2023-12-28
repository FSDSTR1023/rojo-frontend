import { useState } from 'react'
import RecipeCard from '../../components/RecipeCard'
import styles from './Explore.module.css'
import { useEffect } from 'react'
import { getAllRecipes } from '../../api/recipe'

export default function Explore() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    getAllRecipes()
      .then((response) => {
        setRecipes(response.data)
      })
      .catch((error) => console.log('No se pudieron cargard las recetas: ' + error))
  }, [])

  return (
    <div>
      <h2>Explore</h2>
      {recipes ? (
        <div className={styles.recipeRow}>
          {recipes.map((recipe) => (
            <RecipeCard key={recipe._id} {...recipe} />
          ))}
        </div>
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  )
}
