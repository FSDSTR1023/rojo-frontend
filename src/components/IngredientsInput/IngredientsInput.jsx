import { useState, useEffect } from 'react'

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

  return (
    <>
      <label htmlFor="ingredients">Ingredients</label>
      {formData.ingredients.map((ingredient, index) => (
        <input
          key={index}
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
    </>
  )
}
