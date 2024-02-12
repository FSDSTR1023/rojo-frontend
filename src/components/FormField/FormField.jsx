import styles from './FormField.module.css'

export default function FormField({ label, value, setValue, type = 'text', isEdit = true }) {
  // console.log(value)
  return (
    <div className={styles.field}>
      <p className={styles.fieldTitle}>{label}</p>
      {isEdit ? (
        <input className={styles.fieldInput} type={type} value={value} onChange={(e) => setValue(e.target.value)} />
      ) : (
        <p className={styles.fieldData}>{value}</p>
      )}
    </div>
  )
}
