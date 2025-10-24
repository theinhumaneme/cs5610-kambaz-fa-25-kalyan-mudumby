"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import TodoForm from "./todoForm";
import TodoItem from "./todoItem";

export default function TodoList() {
  const todos = useSelector((state: any) => state.todoReducer.todos);
  return (
    <div>
      <h2>Todo List</h2>
      <ListGroup>
        <TodoForm />
        {todos.map((todo: { id: string; title: string }) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}
