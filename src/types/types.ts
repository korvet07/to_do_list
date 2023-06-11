interface ITask {
  id: string
  title: string
  createAt?: number
}

interface IToDoStore {
  tasks: ITask[]
  createTask: (title: string) => void
  updateTask: (id: string, title: string) => void
  removeTask: (id: string) => void
}

interface IInputAddProps {
  onAdd: (title: string) => void
}
type GenerateId = () => string;

export type { ITask, IToDoStore, GenerateId, IInputAddProps }
