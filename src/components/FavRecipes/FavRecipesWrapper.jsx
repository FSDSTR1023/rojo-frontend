import FavRecipesCard from './FavRecipesCard'
import styles from './FavRecipes.module.css'

export default function FavRecipesWrapper({ user }) {
  return (
    <div className={styles.favRecipesContainer}>
      <h6>Fav Recipes</h6>
      <div className={styles.favRecipesWrapper}>
        {user.favRecipes?.map((recipe) => {
          return <FavRecipesCard key={recipe._id} recipe={recipe} />
        })}
      </div>
    </div>
  )
}
