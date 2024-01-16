import React, { useContext } from 'react';
import styles from './Todo.module.css';
import { FaTrashAlt } from 'react-icons/fa';
import { TodoListContext } from '../../contexts/TodoListContext';

export default function Todo({ id }) {
  const { todoList, setTodoList } = useContext(TodoListContext);
  const todoIdx = todoList.findIndex((todo) => todo.id === id);
  const handleCheck = () => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    );
  };
  const handleRemove = () => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <div className={styles.container}>
      <input
        type='checkbox'
        checked={todoList[todoIdx].status}
        onChange={handleCheck}
      />
      <span className={todoList[todoIdx].status ? styles.done : undefined}>
        {todoList[todoIdx].title}
      </span>
      <FaTrashAlt onClick={handleRemove} />
    </div>
  );
}
