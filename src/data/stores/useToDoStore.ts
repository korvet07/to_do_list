import { create } from 'zustand';
import { ITask, IToDoStore } from '../../types/types';
import { generateId } from '../../utils/helpers';

export const useToDoStore = create<IToDoStore>((set, get) => ({
  tasks: [
    {
      id: 'fttrde4',
      title: 'Дефолтная задача'
    }
  ],
  createTask: (title) => {
    const { tasks } = get();
    const newTask: ITask = {
      id: generateId(),
      title,
      createAt: Date.now()
    };
    set({
      tasks: [newTask].concat(tasks)
    })

  },
  updateTask: (id, title) => {
    const { tasks } = get();
    set({
      tasks: tasks.map((task) => ({
        ...task,
        title: task.id === id ? title : task.title
      }))
    })
  },
  removeTask: (id) => {
    const { tasks } = get();
    set({
      tasks: tasks.filter((task) => task.id !== id)
    })
  },
}))