import styles from './Step.module.css'

export default function Step({ title, description, stepNumber }) {
  return (
    <div className={styles.step}>
      <p data-testid="stepNumber" className={styles.stepNumber}>
        {stepNumber}
      </p>
      <div className={styles.stepContent}>
        <h4>{title}</h4>
        <p data-testid="description">{description}</p>
      </div>
    </div>
  )
}
