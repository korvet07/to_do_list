import { useCallback, useState } from 'react'
import { IInputAddProps } from '../../../types/types'
import styles from './index.module.scss'

export const InputAdd: React.FC<IInputAddProps> = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState('');
  const addNewTask = useCallback(() => {
    onAdd(inputValue);
    setInputValue('');
  }, [inputValue, onAdd])

  return (
    <div className={styles.inputAdd}>
      <input
        type="text"
        className={styles.inputAddTitle}
        value={inputValue}
        onChange={(evt) => setInputValue(evt.target.value)}
        onKeyDown={(evt) => {
          if (evt.key === 'Enter') {
            addNewTask()
          }
        }}
      />
      <button
        type="button"
        aria-label="Add task"
        className={styles.inputAddButton}
        onClick={addNewTask}
      ></button>
    </div>
  )
}