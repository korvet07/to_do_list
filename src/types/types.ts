interface ITask {
  id: string
  title: string
  isDone: boolean
}

interface IToDoStore {
  tasks: ITask[]
  copyTasks: ITask[]
  createTask: (title: string) => void
  updateTask: (id: string, title: string) => void
  removeTask: (id: string) => void
  fulfillTask: (id: string) => void
  notFulfilledTask: (id: string) => void
  showFulfilledTasks: () => void
  showUnfinishedTasks: () => void
  showAllTasks: () => void
}

interface IInputAddProps {
  onAdd: (title: string) => void
}

type GenerateId = () => string

interface IInputTaskProps {
  id: string
  title: string
  checked: boolean
  onDone: (id: string) => void
  onEdited: (id: string, title: string) => void
  onRemoved: (id: string) => void
  onNotDone: (id: string) => void
}

interface IContentProps {
  children: string
  checked: boolean
}

interface IInputCheckDoneProps {
  isEditMode: boolean
  checked: boolean
  styles: CSSModuleClasses
  onDone: (id: string) => void
  setChecked: React.Dispatch<React.SetStateAction<boolean>>
}

interface IShowTasksProps {
  showFulfilledTasks: () => void
  showUnfinishedTasks: () => void
  showAllTasks: () => void
}
export type { ITask, IToDoStore, GenerateId, IInputAddProps, IInputTaskProps, IContentProps, IInputCheckDoneProps, IShowTasksProps }
