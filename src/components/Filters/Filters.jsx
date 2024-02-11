import styles from './Filters.module.css'
import { CATEGORIES, DIFFICULTY, PREPARATION_TIME } from '../../constants/recipe'
import DropdownList from '../atoms/DropdownList'
import DropdownMultiSelect from '../atoms/DropdownMultiSelect'
import HorizontalSlider from '../atoms/HorizontalSlider/HorizontalSlider'

export default function Filters({ filters, setFilters }) {
  const { difficulty, preparationTime, categories, minRating, maxRating } = filters

  const handleChange = (key, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }))
  }

  return (
    <div className={styles.container}>
      {/* <div>
        <p>Title</p>
        <input type="text" />
      </div> */}
      <div className={styles.row}>
        <div>
          <p>Difficulty</p>

          <DropdownList
            state={difficulty}
            setState={(value) => handleChange('difficulty', value)}
            options={DIFFICULTY}
          />
        </div>

        <div>
          <p>Preparation Time</p>

          <DropdownList
            state={preparationTime}
            setState={(value) => handleChange('preparationTime', value)}
            options={PREPARATION_TIME}
          />
        </div>

        <div className={styles.row}>
          <p>Rating</p>
          <HorizontalSlider
            min={minRating}
            max={maxRating}
            setMin={(value) => handleChange('minRating', value)}
            setMax={(value) => handleChange('maxRating', value)}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div>
          <p>Categories</p>
          <DropdownMultiSelect options={CATEGORIES} setState={(value) => handleChange('categories', value)} />
        </div>
      </div>

      {/* <div>
        <p>Ingredients</p>
        <input type="text" />
      </div> */}
    </div>
  )
}
