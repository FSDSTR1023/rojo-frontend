import styles from './DropdownList.module.css'
import { Listbox } from '@headlessui/react'

export default function DropdownList({ state, setState, options }) {
  return (
    <Listbox value={state} onChange={setState}>
      <div className={styles.wrapper}>
        <Listbox.Button className={styles.button}>{state}</Listbox.Button>
        <Listbox.Options className={styles.options}>
          {options.map((option) => {
            return (
              <Listbox.Option key={option} value={option} className={styles.option}>
                {option}
              </Listbox.Option>
            )
          })}
        </Listbox.Options>
      </div>
    </Listbox>
  )
}
