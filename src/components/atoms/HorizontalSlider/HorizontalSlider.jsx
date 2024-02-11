import styles from './HorizontalSlider.module.css'
import { Slider } from 'antd'

export default function HorizontalSlider({ min, max, setMin, setMax }) {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} type="number" value={min} readOnly />
      <div className={styles.slider}>
        <Slider
          range
          defaultValue={[0, 5]}
          min={0}
          max={5}
          value={[min, max]}
          onChange={(value) => {
            setMin(value[0])
            setMax(value[1])
          }}
        />
      </div>
      <input className={styles.input} type="number" value={max} readOnly />
    </div>
  )
}
