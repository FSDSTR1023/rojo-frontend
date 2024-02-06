import { useState } from 'react'
import { createRecipe } from '../../api/recipe'
import styles from './CreateRecipe.module.css'
import ImageInput from '../../components/ImageInput'

export default function CreateRecipe() {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: [],
    preparation: [],
    categories: '',
    difficulty: '',
    preparationTime: [],
    imageUrl: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleIngredientsChange = (e, index) => {
    const { value } = e.target
    const updatedIngredients = [...formData.ingredients]
    updatedIngredients[index] = value
    setFormData((prevState) => ({
      ...prevState,
      ingredients: updatedIngredients,
    }))
  }

  const handlePreparationChange = (e, index) => {
    const { name, value } = e.target
    const updatedPreparation = [...formData.preparation]
    updatedPreparation[index][name] = value
    setFormData((prevState) => ({
      ...prevState,
      preparation: updatedPreparation,
    }))
  }

  const handleAddIngredient = () => {
    setFormData((prevState) => ({
      ...prevState,
      ingredients: [...prevState.ingredients, ''],
    }))
  }

  const handleAddStep = () => {
    setFormData((prevState) => ({
      ...prevState,
      preparation: [...prevState.preparation, { title: '', description: '' }],
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // Subir la imagen a Cloudinary
      const imageData = new FormData()
      imageData.append('file', formData.imageFile)
      imageData.append('upload_preset', 'kzcfcttj') // Reemplaza 'tu_upload_preset' con tu propio valor
      const response = await fetch(import.meta.env.VITE_CLOUDINARY_URL, {
        method: 'POST',
        body: imageData,
      })
      const data = await response.json()

      // Guardar la URL de la imagen en el estado del formulario
      setFormData((prevState) => ({
        ...prevState,
        imageUrl: data.secure_url,
      }))

      await createRecipe(formData)
    } catch (error) {
      console.error('Error al crear la receta: ', error)
    }
  }

  return (
    <div className={styles.container}>
      <h4>Create new recipe</h4>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="title">
            Title
          </label>
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
          <label className={styles.label} htmlFor="ingredients">
            Ingredients
          </label>
          {formData.ingredients.map((ingredient, index) => (
            <input
              key={index}
              className={styles.input}
              type="text"
              name="ingredients"
              value={ingredient}
              onChange={(e) => handleIngredientsChange(e, index)}
              placeholder={`Ingredient ${index + 1}`}
            />
          ))}
          <button type="button" onClick={handleAddIngredient}>
            Add Ingredient
          </button>
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="preparation">
            Preparation
          </label>
          {formData.preparation.map((step, index) => (
            <div key={index}>
              <input
                className={styles.input}
                type="text"
                name="title"
                value={step.title}
                onChange={(e) => handlePreparationChange(e, index)}
                placeholder={`Step ${index + 1} title`}
              />
              <input
                className={styles.input}
                type="text"
                name="description"
                value={step.description}
                onChange={(e) => handlePreparationChange(e, index)}
                placeholder={`Step ${index + 1} description`}
              />
            </div>
          ))}
          <button type="button" onClick={handleAddStep}>
            Add Step
          </button>
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="categories">
            Categories
          </label>
          <input
            className={styles.input}
            type="text"
            name="categories"
            value={formData.categories}
            onChange={handleChange}
            placeholder="Add categories..."
          ></input>
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="difficulty">
            Difficulty
          </label>
          <select className={styles.select} name="difficulty" value={formData.difficulty} onChange={handleChange}>
            <option value="">Select Difficulty</option>
            <option value="EASY">Easy</option>
            <option value="MEDIUM">Medium</option>
            <option value="HARD">Hard</option>
          </select>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="time">
            Preparation time
          </label>
          <select
            className={styles.select}
            name="preparationTime"
            value={formData.preparationTime}
            onChange={handleChange}
          >
            <option value="">Select Preparation Time</option>
            <option value="FAST">Fast</option>
            <option value="MODERATE">Moderate</option>
            <option value="LONG">Long</option>
          </select>
        </div>
        <div className={styles.field}>
          <ImageInput
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            imageUrl={formData.imageUrl}
          />
        </div>
        <button type="submit">Publish Recipe</button>
      </form>
    </div>
  )
}
