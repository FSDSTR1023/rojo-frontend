import styles from './Opinion.module.css'
import { useState } from 'react'
import EditIcon from '../EditIcon'
import DeleteIcon from '../DeleteIcon'
import { useProfile } from '../../context/ProfileContext'
import { useRecipe } from '../../context/RecipeContext'
import OpinionDisplay from './OpinionDisplay'
import OpinionAdd from './OpinionAdd'
import OpinionEdit from './OpinionEdit'

export default function Opinion({ _id: id, text, rating, user, isAdd }) {
  const { profile } = useProfile()
  const { deleteOpinion } = useRecipe()
  const [isEdit, setIsEdit] = useState(false)

  const isOwner = profile?._id === user?._id

  const handleEdit = () => {
    setIsEdit(true)
  }
  const handleDelete = () => {
    deleteOpinion(id)
  }

  if (isEdit) return <OpinionEdit setIsEdit={setIsEdit} initialText={text} initialRating={rating} opinionId={id} />
  if (isAdd) return <OpinionAdd setIsEdit={setIsEdit} />

  return (
    <div className={styles.opinionWrapper}>
      <OpinionDisplay text={text} rating={rating} user={user} />

      {isOwner && (
        <div className={styles.actions}>
          <EditIcon className={styles.edit} onClick={handleEdit} />
          <DeleteIcon className={styles.delete} onClick={handleDelete} />
        </div>
      )}
    </div>
  )
}
