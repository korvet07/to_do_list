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
  copyTasks: [
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
  noTasks: [
    {
      id: '0',
      title: 'Не задача',
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
      copyTasks: [...[newTask].concat(tasks)],
    })

  },
  updateTask: (id, title) => {
    const { tasks } = get();

    set({
      tasks: tasks.map((task) => ({
        ...task,
        title: task.id === id ? title : task.title
      })),
      copyTasks: [...tasks.map((task) => ({
        ...task,
        title: task.id === id ? title : task.title
      }))],
    })
  },
  removeTask: (id) => {
    const { tasks } = get();

    set({
      tasks: tasks.filter((task) => task.id !== id),
      copyTasks: [...tasks.filter((task) => task.id !== id)],
    })
  },
  fulfillTask: (id) => {
    const { tasks } = get();
    const { copyTasks } = get();

    set({
      tasks: tasks.map((task) => ({
        ...task,
        isDone: task.id === id ? true : task.isDone
      })),
      copyTasks: [...copyTasks.map((task) => ({
        ...task,
        isDone: task.id === id ? true : task.isDone
      }))],
    })
  },
  notFulfilledTask: (id) => {
    const { tasks } = get();
    const { copyTasks } = get();

    set({
      tasks: tasks.map((task) => ({
        ...task,
        isDone: task.id === id ? false : task.isDone
      })),
      copyTasks: [...copyTasks.map((task) => ({
        ...task,
        isDone: task.id === id ? false : task.isDone
      }))],
    })
  },
  showFulfilledTasks: () => {
    const { copyTasks } = get();
    const { noTasks } = get();

    set({
      tasks: copyTasks.slice().filter((task) => task.isDone).length ? copyTasks.slice().filter((task) => task.isDone) :
        [...noTasks]
    })
  },
  showUnfinishedTasks: () => {
    const { copyTasks } = get();
    const { noTasks } = get();

    set({
      tasks: copyTasks.slice().filter((task) => !task.isDone).length ? copyTasks.slice().filter((task) => !task.isDone) :
        [...noTasks]
    })
  },
  showAllTasks: () => {
    const { copyTasks } = get();

    set({
      tasks: [...copyTasks]
    })
  }
}));
