import { useState, useEffect } from 'react'

export default function RecipeStepsInput({ formData, setFormData }) {
  const [initialRender, setInitialRender] = useState(true)

  useEffect(() => {
    if (initialRender) {
      setFormData((prevState) => ({
        ...prevState,
        preparation: [{ title: '', description: '' }], // Modificación aquí
      }))
      setInitialRender(false)
    }
  }, [initialRender, setFormData])

  const handlePreparationChange = (e, index) => {
    const { name, value } = e.target
    const updatedPreparation = [...formData.preparation]
    updatedPreparation[index][name] = value
    setFormData((prevState) => ({
      ...prevState,
      preparation: updatedPreparation,
    }))
  }

  const handleAddStep = () => {
    setFormData((prevState) => ({
      ...prevState,
      preparation: [...prevState.preparation, { title: '', description: '' }], // Modificación aquí
    }))
  }

  return (
    <>
      <label htmlFor="preparation">Preparation</label>
      {formData.preparation.map((step, index) => (
        <div key={index}>
          <input
            type="text"
            name="title"
            value={step.title}
            onChange={(e) => handlePreparationChange(e, index)}
            placeholder={`Step ${index + 1} title`}
          />
          <input
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
    </>
  )
}
