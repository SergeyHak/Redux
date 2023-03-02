import React, { useState } from "react";
import { useSelector } from "react-redux";
import { todosSelector } from "../../store/selectors/todo";
import { Todo } from "../todo";
import styles from "./index.module.css";
import { useDispatch } from "react-redux";
// import { removeAllTodo } from "../../store/actions/creators/todo";



export const TodoList = ({todo}) => {
  const todos = useSelector(todosSelector);
  const dispatch = useDispatch();

  const [filter, setFilter] = useState("all");

  const filteredTodos =
    filter === "all"
      ? todos
      : todos.filter((todo) =>
          filter === "completed" ? todo.completed : !todo.completed
        );
        function removeAllTodoItem() {
          todos.filter((todo)=>filter === "" )
        }
        
      

  return (
    <div>
      <div>
        <button onClick={() => setFilter("all")}>Весь список задач</button>
        <button onClick={() => setFilter("completed")}>
          Завершенные задачи
        </button>
        <button onClick={() => setFilter("uncompleted")}>
          {" "}
          Оставшиеся задачи
        </button>
        {/* <button onClick={removeAllTodoItem}>Очистить список задач</button> */}
      </div>
      <ul className={styles.list}>
        {filteredTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};