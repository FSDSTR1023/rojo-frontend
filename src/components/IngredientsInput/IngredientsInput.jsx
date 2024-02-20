import { useState, useEffect } from 'react'
import styles from './IngredientsInput.module.css'

export default function IngredientsInput({ formData, setFormData }) {
  const [initialRender, setInitialRender] = useState(true)

  useEffect(() => {
    if (initialRender) {
      setFormData((prevState) => ({
        ...prevState,
        ingredients: [''],
      }))
      setInitialRender(false)
    }
  }, [initialRender, setFormData])

  const handleAddIngredient = () => {
    setFormData((prevState) => ({
      ...prevState,
      ingredients: [...prevState.ingredients, ''],
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

  const handleRemoveIngredient = (index) => {
    const updatedIngredients = [...formData.ingredients]
    updatedIngredients.splice(index, 1)
    setFormData((prevState) => ({
      ...prevState,
      ingredients: updatedIngredients,
    }))
  }

  return (
    <div className={styles.field}>
      <label className={styles.fieldTitle} htmlFor="ingredients">
        Ingredients
      </label>
      <div className={styles.ingredientContainer}>
        {formData.ingredients.map((ingredient, index) => (
          <div key={index} className={styles.ingredient}>
            <input
              key={index}
              type="text"
              name="ingredients"
              value={ingredient}
              onChange={(e) => handleIngredientsChange(e, index)}
              placeholder={`Ingredient ${index + 1}`}
            />
            <button type="button" onClick={() => handleRemoveIngredient(index)}>
              x
            </button>
          </div>
        ))}
      </div>
      <button type="button" onClick={handleAddIngredient}>
        Add Ingredient
      </button>
    </div>
  )
}
