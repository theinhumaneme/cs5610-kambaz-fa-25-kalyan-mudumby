"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, FormControl, ListGroupItem } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, setTodo, updateTodo } from "./todosReducer";

export default function TodoForm() {
  const todo: {
    id: string;
    title: string;
  } = useSelector((state: any) => state.todoReducer.todo);
  const dispatch = useDispatch();
  return (
    <ListGroupItem>
      <Button
        className="m-2 p-2"
        variant="success"
        onClick={() => {
          dispatch(addTodo(todo));
        }}
        id="wd-add-todo-click"
      >
        Add{" "}
      </Button>
      <Button
        className="m-2 p-2"
        variant="warning"
        onClick={() => dispatch(updateTodo(todo))}
        id="wd-update-todo-click"
      >
        {" "}
        Update{" "}
      </Button>
      <FormControl
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
      />
    </ListGroupItem>
  );
}
