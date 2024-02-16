import styles from './Favorite.module.css'
import { useProfile } from '../../context/ProfileContext'
import { useState } from 'react'
import Heart from '../Heart'

export default function Favorite({ children, recipe }) {
  const { profile, toggleFavorite } = useProfile()
  const [isFavorite, setIsFavorite] = useState(profile.favRecipes.includes(recipe._id))

  const handleClick = async (id) => {
    await toggleFavorite(id)
    setIsFavorite((f) => !f)
  }

  return (
    <div className={styles.wrapper}>
      <button onClick={() => handleClick(recipe._id)} className={styles.favoriteButton}>
        {isFavorite ? '❤️' : <Heart />}
      </button>
      {children}
    </div>
  )
}
