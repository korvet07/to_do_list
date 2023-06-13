import { useEffect, useRef, useState } from 'react';
import { IContentProps, IInputTaskProps } from '../../../types/types';
import styles from './index.module.scss';

const Content: React.FC<IContentProps> = ({ children, checked }) => {
  return (
    checked ?
      (<del className={styles.inputTaskTitle} >{children}</del>)
      :
      (<h3 className={styles.inputTaskTitle}>{children}</h3>)
  )
};

export const InputTask: React.FC<IInputTaskProps> = ({ id, title, checked, onDone, onEdited, onRemoved, onNotDone }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [value, setValue] = useState(title);
  const editTitleInputRef = useRef<HTMLInputElement>(null);
  const editTask = () => {
    onEdited(id, value);
    setIsEditMode(false);
  };

  useEffect(() => {
    if (isEditMode) {
      editTitleInputRef?.current?.focus();
    }
  }, [isEditMode, checked]);

  return (
    <div className={styles.inputTask}>
      <label className={styles.inputTaskLabel}>
        <input
          type="checkbox"
          disabled={isEditMode}
          checked={checked}
          className={styles.inputTaskCheckbox}
          onChange={(evt) => {
            if (evt.target.checked) {
              onDone(id);
            } else {
              onNotDone(id);
            }
          }}
        />
        {isEditMode ? (
          <input
            ref={editTitleInputRef}
            value={value}
            className={styles.inputTaskEditTitle}
            onChange={(evt) => setValue(evt.target.value)}
            onBlur={editTask}
            onKeyDown={(evt) => {
              if (evt.key === 'Enter') {
                editTask();
              }
            }}
          />
        ) : (
          <Content checked={checked}>{title}</Content>
        )}
      </label>
      {isEditMode ? (
        <button
          aria-label="Save"
          className={styles.inputTaskSave}
          onClick={editTask}
        />
      ) : (
        <button
          aria-label="Edit"
          disabled={checked}
          className={styles.inputTaskEdit}
          onClick={() => setIsEditMode(true)}
        />
      )}
      <button
        aria-label="Remove"
        className={styles.inputTaskRemove}
        onClick={() => {
          if (confirm('Are you sure?')) {
            onRemoved(id);
          }
        }}
      />
    </div>
  )
}