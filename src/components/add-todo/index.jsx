import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/actions/creators/todo";
// import cx from "classnames";
// import { Todo } from "../todo";


import styles from "./index.module.css";

export const AddTodo = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  // const[filtered,setfiltered] = useState(Todo)

  const onInputChange = (evt) => {
    setValue(evt.target.value);
  };

  const handleAddTodo = () => {
    dispatch(addTodo(value));
    setValue("");
  };

  return (
    <>
    <div className={styles.main}>
      <input type="text" value={value} onChange={onInputChange} />
      </div>
      <div>
      <button className={styles.addButton} onClick={handleAddTodo}>
        Добавить задачу
      </button>
      {/* <button className={styles.addButton} onClick ={()=>todoFilter("all")}>
        Показать все
      </button>
      <button className={styles.addButton} onClick ={()=>todoFilter("true")} >
        Показать выполненные
      </button>
      <button className={styles.addButton} onClick ={()=>todoFilter("false")}>
        Показать невыполненные
      </button> */}
    </div>
    </>
  );
};