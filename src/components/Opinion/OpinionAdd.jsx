import { useState } from 'react'
import styles from './Opinion.module.css'
import OpinionEdit from './OpinionEdit'

export default function OpinionAdd() {
  const [isEdit, setIsEdit] = useState(false)

  const handleClick = () => {
    setIsEdit(true)
  }

  return (
    <div className={styles.opinionWrapper}>
      {!isEdit ? (
        <button className={styles.addButton} onClick={handleClick}>
          +
        </button>
      ) : (
        <OpinionEdit setIsEdit={setIsEdit} />
      )}
    </div>
  )
}
