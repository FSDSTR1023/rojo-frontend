import styles from './Filters.module.css'
import { CATEGORIES, DIFFICULTY, PREPARATION_TIME } from '../../constants/recipe'
import DropdownList from '../DropdownList'
import DropdownMultiSelect from '../DropdownMultiSelect'

export default function Filters({ filters, setFilters }) {
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
            state={filters.difficulty}
            setState={(value) => handleChange('difficulty', value)}
            options={DIFFICULTY}
          />
        </div>
        <div>
          <p>Preparation Time</p>

          <DropdownList
            state={filters.preparationTime}
            setState={(value) => handleChange('preparationTime', value)}
            options={PREPARATION_TIME}
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
      {/* <div>
        <p>Rating</p>
        <input type="text" />
      </div> */}
    </div>
  )
}
