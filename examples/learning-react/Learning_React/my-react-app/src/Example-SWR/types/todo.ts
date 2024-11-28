export interface TodoType {
  id: string;
  title: string;
}

export interface TodoProps {
  todo: TodoType;
  deleteTodo: (id: string) => void;
}

export interface ModalUpdateProps {
  todo: TodoType;
  hideModalUpdate: Function;
  isReload: Boolean;
  setIsReLoad: Function;
}