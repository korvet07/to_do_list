import { useToDoStore } from '../../data/stores/useToDoStore';
import { InputAdd } from '../components/input-add';
import { InputTask } from '../components/input-task';
import { ShowTasks } from '../components/show-tasks';
import styles from './index.module.scss'

export const App: React.FC = () => {
  const [tasks, createTask, removeTask, updateTask, fulfillTask, notFulfilledTask, showFulfilledTasks, showAllTasks, showUnfinishedTasks, storeTasks] = useToDoStore((state) => [
    state.tasks,
    state.createTask,
    state.removeTask,
    state.updateTask,
    state.fulfillTask,
    state.notFulfilledTask,
    state.showFulfilledTasks,
    state.showAllTasks,
    state.showUnfinishedTasks,
    state.storeTasks
  ]);

  console.log(tasks, storeTasks);

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
          <p className={styles.articleText}>There is no one task.</p>
        )}
        {tasks.map((task) => (
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
      </section>
      <section>
        {!!tasks.length && (
          <ShowTasks showUnfinishedTasks={showUnfinishedTasks} showFulfilledTasks={showFulfilledTasks} showAllTasks={showAllTasks}/>
        )}
      </section>
    </article>
  )
}