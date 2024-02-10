import styles from './Filters.module.css'
import { DIFFICULTY, PREPARATION_TIME } from '../../constants/recipe'
import DropdownList from '../DropdownList'

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
      {/* <div>
        <p>Categories</p>
        <input type="text" />
      </div>
      <div>
        <p>Ingredients</p>
        <input type="text" />
      </div>
      <div>
        <p>Rating</p>
        <input type="text" />
      </div> */}
    </div>
  )
}
