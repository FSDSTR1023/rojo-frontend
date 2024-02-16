import styles from './Opinion.module.css'

export default function OpinionAdd({ setIsEdit }) {
  const handleClick = () => {
    setIsEdit(true)
  }

  return (
    <button className={styles.addButton} onClick={handleClick}>
      +
    </button>
  )
}
