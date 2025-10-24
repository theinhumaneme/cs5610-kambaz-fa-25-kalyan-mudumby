"use client";
import AddRedux from "./AddRedux/AddRedux";
import CounterRedux from "./CounterRedux/CounterRedux";
import HelloRedux from "./HelloRedux/HelloRedux";
import TodoList from "./todos/todoList";

export default function ReduxExamples() {
  return (
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux />
      <CounterRedux />
      <AddRedux />
      <TodoList />
    </div>
  );
}
