import React, { useContext, useState } from 'react';
import styles from './Footer.module.css';
import { TodoListContext } from '../../contexts/TodoListContext';
import uuid from 'react-uuid';

export default function Footer() {
  const { setTodoList } = useContext(TodoListContext);
  const [todo, setTodo] = useState('');

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      setTodoList((todoList) => [
        ...todoList,
        { id: uuid(), title: todo, status: false },
      ]);
    }

    setTodo('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        type='text'
        name='todo'
        onChange={handleChange}
        placeholder='Add Todo'
        value={todo}
      />
      <button>Add</button>
    </form>
  );
}
