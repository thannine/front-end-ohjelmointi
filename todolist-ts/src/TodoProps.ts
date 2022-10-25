import { Todo } from "./Todo";

export interface TodoProps {
    todos: Array<Todo>;
    deleteFunction: (index: number) => void;
}