import styles from './FormField.module.css'

export default function FormField({ label, value, setValue, type = 'text', isEdit = true }) {
  return (
    <div className={styles.field}>
      <p className={styles.fieldTitle}>{label}</p>
      <input
        className={styles.fieldInput}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!isEdit}
      />
    </div>
  )
}
