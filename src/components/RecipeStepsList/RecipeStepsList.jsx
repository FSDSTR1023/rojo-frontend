import styles from './RecipeStepsList.module.css'

export default function RecipeStepsList({ preparation }) {
  return (
    <div>
      <h3>Steps</h3>
      <div className={styles.steps}>
        {preparation.map(({ title, description }, i) => (
          <div key={i}>
            <h3 className={styles.stepNumber}>{i + 1}</h3>
            <div className={styles.stepContent}>
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
