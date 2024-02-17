import { useState } from 'react'
import { createRecipe } from '../../api/recipe'
import styles from './CreateRecipe.module.css'
import ImageInput from '../../components/ImageInput'
import RecipeStepsInput from '../../components/RecipeStepsInput'
import Select from 'react-select'
import CategoriesInput from '../../components/CategoriesInput'
import IngredientsInput from '../../components/IngredientsInput/IngredientsInput'
import { difficulty, preparationTime } from '../../api/constants'
import { useProfile } from '../../context/ProfileContext'
import { prepareImageData, uploadImageToCloudinary } from '../../api/cloudinary'
import { useNavigate } from 'react-router-dom'

export default function CreateRecipe() {
  const { profile } = useProfile()
  const [formData, setFormData] = useState({
    title: '',
    ingredients: [],
    preparation: [],
    categories: [],
    difficulty: '',
    preparationTime: '',
    imageUrl: '',
    author: profile ? profile._id : '',
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleChangeSelect = (selectedOption, { name }) => {
    const selectedValue = selectedOption.value

    setFormData((prevState) => ({
      ...prevState,
      [name]: selectedValue,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const imageData = prepareImageData(formData.imageFile)
      const imageUrl = await uploadImageToCloudinary(imageData)

      setFormData((prevState) => ({
        ...prevState,
        imageUrl: imageUrl,
      }))
      const recipe = await createRecipe({
        ...formData,
        imageUrl: imageUrl,
      })
      const recipeId = recipe.data._id
      navigate(`/recipe/${recipeId}`)
    } catch (error) {
      console.error('Error al crear la receta: ', error)
    }
  }

  return (
    <div className={styles.container}>
      <h4>Create new recipe</h4>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="title">Title</label>
          <input
            className={styles.input}
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Add title..."
          ></input>
        </div>
        <div className={styles.field}>
          <IngredientsInput {...{ formData, setFormData }} />
        </div>
        <div className={styles.field}>
          <RecipeStepsInput {...{ formData, setFormData }} />
        </div>
        <div className={styles.field}>
          <CategoriesInput {...{ formData, setFormData }} />
        </div>
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
        <button type="submit">Publish Recipe</button>
      </form>
    </div>
  )
}
