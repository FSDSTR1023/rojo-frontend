import styles from './Opinion.module.css'
import Star from '../Star'
import { useState } from 'react'
import { addOpinion } from '../../api/recipe'

export default function Opinion({ text, rating, add, recipeId }) {
  const [edit, setEdit] = useState(false)
  const [opinion, setOpinion] = useState({
    text,
    rating,
  })

  const handleAddOpinion = () => {
    setOpinion({
      text: '',
      rating: 0,
    })
    setEdit(true)
  }

  const handleStar = (n) => {
    if (edit) {
      setOpinion((prevOpinion) => ({ ...prevOpinion, rating: n + 1 }))
    }
  }

  const handleTextChange = (e) => {
    setOpinion((prevOpinion) => ({ ...prevOpinion, text: e.target.value }))
  }

  const handleCancel = () => {
    setOpinion({
      text,
      rating,
    })
    setEdit(false)
  }

  const handleSend = () => {
    addOpinion(recipeId, opinion)
      .then((response) => {
        setOpinion(response.data.updatedOpinion)
        setEdit(false)
      })
      .catch((err) => console.log(err))
  }

  if (add && !edit) {
    return (
      <div className={`${styles.opinionWrapper} ${styles.addWrapper}`}>
        <button className={styles.addButton} onClick={handleAddOpinion}>
          +
        </button>
      </div>
    )
  }

  return (
    <div className={styles.opinionWrapper}>
      <div className={styles.starsWrapper}>
        {[...Array(5)].map((e, i) => {
          const starClass = i < opinion.rating ? styles.fullStar : styles.emptyStar
          return <Star key={i} className={starClass} onClick={() => handleStar(i)} />
        })}
      </div>
      {!edit ? (
        <p>{opinion.text}</p>
      ) : (
        <>
          <input type="textarea" onChange={handleTextChange} />
          <div>
            <button onClick={handleSend}>Send</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </>
      )}
    </div>
  )
}
