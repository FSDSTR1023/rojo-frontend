import Select from 'react-select'
import { categories } from '../../api/constants'

export default function CategoriesInput({ formData, setFormData }) {
  const options = categories.map((category) => ({ value: category, label: category }))

  const handleChange = (selectedOptions) => {
    const selectedCategories = selectedOptions.map((option) => option.value)
    setFormData((prevState) => ({
      ...prevState,
      categories: selectedCategories,
    }))
  }

  return (
    <>
      <label htmlFor="categories">Categories</label>
      <Select
        defaultValue={[options[2], options[3]]}
        isMulti
        name={formData.categories}
        options={options}
        onChange={handleChange}
      />
    </>
  )
}
