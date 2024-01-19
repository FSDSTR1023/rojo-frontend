import { useContext, useState } from 'react'
import styles from './Opinion.module.css'
import Star from '../Star'
import { addOpinion } from '../../api/recipe'
import RecipeContext from '../../context/RecipeContext'

export default function OpinionEdit({ setIsEdit }) {
  const [rating, setRating] = useState(3)
  const [text, setText] = useState('')

  const { id: recipeId, setOpinion } = useContext(RecipeContext)

  const handleStarClick = (n) => {
    setRating(n + 1)
  }

  const handleTextChange = (e) => {
    setText(e.target.value)
  }

  const handleCancel = () => {
    setIsEdit(false)
  }

  const handleSend = () => {
    addOpinion(recipeId, { rating, text })
      .then((response) => {
        setOpinion(response.data.updatedOpinion)
        setIsEdit(false)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className={styles.opinionWrapper}>
      <div className={styles.starsWrapper}>
        {[...Array(5)].map((e, i) => {
          const starClass = i < rating ? styles.fullStar : styles.emptyStar
          return <Star key={i} className={starClass} onClick={() => handleStarClick(i)} />
        })}
      </div>
      <input className={styles.text} type="textarea" onChange={handleTextChange} />
      <div className={styles.buttonsWrapper}>
        <button onClick={handleSend}>Send</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  )
}
