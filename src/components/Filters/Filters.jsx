import styles from './Filters.module.css'

export default function Filters() {
  return (
    <div className={styles.container}>
      <div>
        <p>Title</p>
        <input type="text" />
      </div>
      <div>
        <p>Difficulty</p>
        <input type="text" />
      </div>
      <div>
        <p>Preparation Time</p>
        <input type="text" />
      </div>
      <div>
        <p>Categories</p>
        <input type="text" />
      </div>
      <div>
        <p>Ingredients</p>
        <input type="text" />
      </div>
      <div>
        <p>Rating</p>
        <input type="text" />
      </div>
    </div>
  )
}
