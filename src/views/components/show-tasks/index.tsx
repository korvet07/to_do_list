import { IShowTasksProps } from '../../../types/types';
import styles from './index.module.scss';

export const ShowTasks: React.FC<IShowTasksProps> = ({showAllTasks, showFulfilledTasks, showUnfinishedTasks}) => {

  return (
    <div className={styles.showTasks}>
      <button className={styles.showTasksButton} type="button" onClick={showAllTasks}>Show all</button>
      <button className={styles.showTasksButton} type="button" onClick={showFulfilledTasks}>Show completed</button>
      <button className={styles.showTasksButton} type="button" onClick={showUnfinishedTasks}>Show unfinished</button>
    </div>
  )
}