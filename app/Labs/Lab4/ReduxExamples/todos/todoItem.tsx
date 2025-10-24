"use client";
import { Button, ListGroupItem } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({
  todo,
}: {
  todo: { id: string; title: string };
}) {
  const dispatch = useDispatch();
  return (
    <ListGroupItem key={todo.id}>
      <Button
        className="m-2 p-2"
        variant="danger"
        onClick={() => dispatch(deleteTodo(todo.id))}
        id="wd-delete-todo-click"
      >
        {" "}
        Delete{" "}
      </Button>
      <Button
        className="m-2 p-2"
        variant="primary"
        onClick={() => dispatch(setTodo(todo))}
        id="wd-set-todo-click"
      >
        {" "}
        Edit{" "}
      </Button>
      {todo.title}
    </ListGroupItem>
  );
}
