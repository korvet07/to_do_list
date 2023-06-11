import { useToDoStore } from '../../data/stores/useToDoStore';
import { InputAdd } from '../components/input-add';
import styles from './index.module.scss'

export const App: React.FC = () => {
  const [tasks, createTask, removeTask, updateTask] = useToDoStore((state) => [
    state.tasks,
    state.createTask,
    state.removeTask,
    state.updateTask
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
      <section className={styles.articleSection}></section>
    </article>
  )
}