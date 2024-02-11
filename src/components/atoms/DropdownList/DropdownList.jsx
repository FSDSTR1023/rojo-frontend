import styles from './DropdownList.module.css'
import { Listbox } from '@headlessui/react'

export default function DropdownList({ state, setState, options }) {
  return (
    <Listbox value={state} onChange={setState}>
      <div className={styles.wrapper}>
        <div className={styles.select}>
          <Listbox.Button className={styles.button}>{state ? state : '-- Select an option --'}</Listbox.Button>
          <Listbox.Options className={styles.options}>
            <Listbox.Option key={'default'} value={''} className={styles.option}>
              -- Select an option --
            </Listbox.Option>
            {options.map((option) => {
              return (
                <Listbox.Option key={option} value={option} className={styles.option}>
                  {option}
                </Listbox.Option>
              )
            })}
          </Listbox.Options>
        </div>
        <button className={styles.reset} onClick={() => setState('')}>
          x
        </button>
      </div>
    </Listbox>
  )
}
