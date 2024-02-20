import { useState, useEffect } from 'react'
import styles from './RecipeStepsInput.module.css'
import IconTrash from '../IconTrash'

export default function RecipeStepsInput({ formData, setFormData }) {
  const [initialRender, setInitialRender] = useState(true)

  useEffect(() => {
    if (initialRender) {
      setFormData((prevState) => ({
        ...prevState,
        preparation: [{ title: '', description: '' }],
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

  const handleRemoveStep = (index) => {
    const updatedPreparation = [...formData.preparation]
    updatedPreparation.splice(index, 1)
    setFormData((prevState) => ({
      ...prevState,
      preparation: updatedPreparation,
    }))
  }

  return (
    <div className={styles.field}>
      <label className={styles.fieldTitle} htmlFor="preparation">
        Preparation
      </label>
      {formData.preparation.map((step, index) => (
        <div key={index} className={styles.stepContainer}>
          <input
            className={styles.stepTitle}
            type="text"
            name="title"
            value={step.title}
            onChange={(e) => handlePreparationChange(e, index)}
            placeholder={`Step ${index + 1} title`}
          />
          <input
            className={styles.stepDescription}
            type="text"
            name="description"
            value={step.description}
            onChange={(e) => handlePreparationChange(e, index)}
            placeholder={`Step ${index + 1} description`}
          />
          <button type="button" onClick={() => handleRemoveStep(index)}>
            <IconTrash />
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddStep}>
        Add Step
      </button>
    </div>
  )
}
