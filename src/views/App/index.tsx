import { useToDoStore } from '../../data/stores/useToDoStore';
import { InputAdd } from '../components/input-add';
import { InputTask } from '../components/input-task';
import { ShowTasks } from '../components/show-tasks';
import styles from './index.module.scss'

export const App: React.FC = () => {
  const [tasks, createTask, removeTask, updateTask, fulfillTask, notFulfilledTask, showFulfilledTasks, showAllTasks, showUnfinishedTasks] = useToDoStore((state) => [
    state.tasks,
    state.createTask,
    state.removeTask,
    state.updateTask,
    state.fulfillTask,
    state.notFulfilledTask,
    state.showFulfilledTasks,
    state.showAllTasks,
    state.showUnfinishedTasks,
  ]);

  return (
    <article className={styles.article}>
      <h1 className={styles.articleTitle}>To Do App</h1>
      <section className={styles.articleSection}>
        <InputAdd onAdd={(title) => {
          if (title) {

            return createTask(title);
          }
        }} />
      </section>
      <section className={styles.articleSection}>
        {!tasks.length && (
          <h2 className={styles.articleText}>There is no one task.</h2>
        )}

        {(tasks.length !== 1 || tasks[0].id !== '0') && tasks.map((task) => (
          <InputTask
            key={task.id}
            id={task.id}
            checked={task.isDone}
            title={task.title}
            onDone={fulfillTask}
            onEdited={updateTask}
            onRemoved={removeTask}
            onNotDone={notFulfilledTask}
          />
        ))}

        {(tasks.length === 1 && tasks[0].id === '0') && (
          <h2>No tasks to show</h2>
        )}
      </section>
      <section>
        {!!tasks.length && (
          <ShowTasks
            showUnfinishedTasks={showUnfinishedTasks}
            showFulfilledTasks={showFulfilledTasks}
            showAllTasks={showAllTasks}
          />
        )}
      </section>
    </article>
  )
}
