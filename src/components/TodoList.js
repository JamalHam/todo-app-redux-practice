import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { getTodosbyVisibilityFilter } from "../redux/selectors";

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo) => {
        return <Todo key={`todo-${todo.id}`} todo={todo} />;
      })
      : "No todos, yay!"}
  </ul>
);

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const todos = getTodosbyVisibilityFilter(state, visibilityFilter)
  return { todos };
}

export default connect(mapStateToProps)(TodoList)
// export default connect((state) => ({ todos: getTodos(state) }))(TodoList);
