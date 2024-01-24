import styles from './Tag.module.css'

export default function Tag({ children, handleClick }) {
  return (
    <button onClick={handleClick} className={styles.tag}>
      {children}
    </button>
  )
}
