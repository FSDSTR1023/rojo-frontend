import { useState, useEffect } from 'react'
import styles from './CreateRecipe.module.css'
import FormField from '../../components/FormField/FormField'
import ImageInput from '../../components/ImageInput'
import RecipeStepsInput from '../../components/RecipeStepsInput'
import Select from 'react-select'
import CategoriesInput from '../../components/CategoriesInput'
import IngredientsInput from '../../components/IngredientsInput/IngredientsInput'
import { difficulty, preparationTime } from '../../api/constants'
import { getRecipeById, updateRecipe } from '../../api/recipe'
import { useParams } from 'react-router-dom'

export default function EditRecipe() {
  const { id } = useParams()
  const [formData, setFormData] = useState({
    title: '',
    ingredients: [],
    preparation: [],
    categories: [],
    difficulty: '',
    preparationTime: '',
    imageUrl: '',
  })

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const response = await getRecipeById(id)
        setFormData(response.data)
      } catch (error) {
        console.error('Error al cargar la receta: ', error)
      }
    }
    fetchRecipe()
  }, [id])

  console.log(formData)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }))
  }

  const handleChangeSelect = (selectedOption, { name }) => {
    const selectedValue = selectedOption.value
    setFormData((prevRecipe) => ({
      ...prevRecipe,
      [name]: selectedValue,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await updateRecipe(recipe)
    } catch (error) {
      console.error('Error al editar la receta: ', error)
    }
  }

  return (
    <div className={styles.container}>
      <h4>Edit recipe</h4>
      <form className={styles.form} onSubmit={handleSubmit}>
        <FormField label="Title" value={formData.title} setValue={(value) => setValue('title', value)} />
        <IngredientsInput {...{ formData, setFormData }} />
        <RecipeStepsInput {...{ formData, setFormData }} />
        <CategoriesInput {...{ formData, setFormData }} />
        <div className={styles.field}>
          <label htmlFor="difficulty">Difficulty</label>
          <Select options={difficulty} name="difficulty" onChange={handleChangeSelect} />
        </div>
        <div className={styles.field}>
          <label htmlFor="time">Preparation time</label>
          <Select options={preparationTime} name="preparationTime" onChange={handleChangeSelect} />
        </div>
        <div className={styles.field}>
          <ImageInput handleChange={handleChange} />
        </div>
        <button type="submit">Edit Recipe</button>
      </form>
    </div>
  )
}
