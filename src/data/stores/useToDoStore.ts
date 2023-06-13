import { create } from 'zustand';
import { ITask, IToDoStore } from '../../types/types';
import { generateId } from '../../utils/helpers';

export const useToDoStore = create<IToDoStore>((set, get) => ({
  tasks: [
    {
      id: 'fttrde4',
      title: 'Дефолтная задача 2',
      isDone: false
    },
    {
      id: 'fttrde4yt',
      title: 'Дефолтная задача 1',
      isDone: false
    }
  ],
  storeTasks: [
    {
      id: 'fttrde4',
      title: 'Дефолтная задача 2',
      isDone: false
    },
    {
      id: 'fttrde4yt',
      title: 'Дефолтная задача 1',
      isDone: false
    }
  ],
  createTask: (title) => {
    const { tasks } = get();
    const newTask: ITask = {
      id: generateId(),
      title,
      isDone: false
    };
    set({
      tasks: [newTask].concat(tasks),
      storeTasks: [...[newTask].concat(tasks)],
    })

  },
  updateTask: (id, title) => {
    const { tasks } = get();
    set({
      tasks: tasks.map((task) => ({
        ...task,
        title: task.id === id ? title : task.title
      })),
      storeTasks: [...tasks.map((task) => ({
        ...task,
        title: task.id === id ? title : task.title
      }))],
    })
  },
  removeTask: (id) => {
    const { tasks } = get();
    set({
      tasks: tasks.filter((task) => task.id !== id),
      storeTasks: [...tasks.filter((task) => task.id !== id)],
    })
  },
  fulfillTask: (id) => {
    const { tasks } = get();
    const { storeTasks } = get();
    set({
      tasks: tasks.map((task) => ({
        ...task,
        isDone: task.id === id ? true : task.isDone
      })),
      storeTasks: [...storeTasks.map((task) => ({
        ...task,
        isDone: task.id === id ? true : task.isDone
      }))],
    })
  },
  notFulfilledTask: (id) => {
    const { tasks } = get();
    const { storeTasks } = get();
    set({
      tasks: tasks.map((task) => ({
        ...task,
        isDone: task.id === id ? false : task.isDone
      })),
      storeTasks: [...storeTasks.map((task) => ({
        ...task,
        isDone: task.id === id ? false : task.isDone
      }))],
    })
  },
  showFulfilledTasks: () => {
    const { storeTasks } = get();
    set({

      tasks: storeTasks.slice().filter((task) => task.isDone).length ? storeTasks.slice().filter((task) => task.isDone) :
      [...storeTasks]
    })
  },
  showUnfinishedTasks: () => {
    const { storeTasks } = get();
    set({

      tasks: storeTasks.slice().filter((task) => !task.isDone).length ? storeTasks.slice().filter((task) => !task.isDone) :
      [...storeTasks]
    })
  },
  showAllTasks: () => {
    const { storeTasks } = get();
    set({

      tasks: [...storeTasks]
    })
  }
}))