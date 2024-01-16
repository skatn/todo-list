import React from 'react';
import styles from './Todo.module.css';
import { FaTrashAlt } from 'react-icons/fa';

export default function Todo({ todo, onUpdate, onDelete }) {
  const handleCheck = (e) => {
    onUpdate({ ...todo, status: e.target.checked });
  };
  const handleDelete = () => {
    onDelete(todo);
  };

  return (
    <div className={styles.container}>
      <input type='checkbox' checked={todo.status} onChange={handleCheck} />
      <span className={todo.status ? styles.done : undefined}>
        {todo.title}
      </span>
      <FaTrashAlt onClick={handleDelete} />
    </div>
  );
}
