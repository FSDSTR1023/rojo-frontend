import Select from 'react-select'
import { categories } from '../../api/constants'
import styles from './CategoriesInput.module.css'

export default function CategoriesInput({ formData, setFormData }) {
  const recipeCategories = formData.categories
  const options = categories.map((category) => ({ value: category, label: category }))
  const defaultCategories = recipeCategories.map((categories) => ({ value: categories, label: categories }))

  const handleChange = (selectedOptions) => {
    const selectedCategories = selectedOptions.map((option) => option.value)
    setFormData((prevState) => ({
      ...prevState,
      categories: selectedCategories,
    }))
  }

  return (
    <div className={styles.field}>
      <label className={styles.fieldTitle} htmlFor="categories">
        Categories
      </label>
      <Select defaultValue={defaultCategories} isMulti name="categories" options={options} onChange={handleChange} />
    </div>
  )
}
