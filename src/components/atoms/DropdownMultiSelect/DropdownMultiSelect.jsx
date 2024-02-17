import styles from './DropdownMultiSelect.module.css'
import Select from 'react-select'

export default function DropdownMultiSelect({ options, setState }) {
  const handleChange = (e) => {
    setState(e.map((element) => element.value))
  }

  return (
    <Select
      className={styles.select}
      options={options.map((option) => ({
        value: option,
        label: option,
      }))}
      isMulti
      closeMenuOnSelect={false}
      onChange={handleChange}
    />
  )
}
