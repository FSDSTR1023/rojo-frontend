import { useState } from 'react'
import styles from './Opinion.module.css'
import Star from '../icons/Star'
import { useRecipe } from '../../context/RecipeContext'

export default function OpinionEdit({ initialText = '', initialRating = 3, opinionId, setIsEdit }) {
  const [rating, setRating] = useState(initialRating)
  const [text, setText] = useState(initialText)

  const { addOpinion, updateOpinion } = useRecipe()

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
    if (opinionId) updateOpinion(text, rating, opinionId)
    else addOpinion(text, rating)
    setIsEdit(false)
  }

  return (
    <div className={styles.opinionWrapper}>
      <div className={styles.starsWrapper}>
        {[...Array(5)].map((e, i) => {
          const starClass = i < rating ? styles.fullStar : styles.emptyStar
          return <Star key={i} className={starClass} onClick={() => handleStarClick(i)} />
        })}
      </div>
      <input className={styles.text} type="textarea" value={text} onChange={handleTextChange} />
      <div className={styles.buttonsWrapper}>
        <button onClick={handleSend}>Send</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  )
}
