import React, { useContext } from 'react';
import styles from './Content.module.css';
import { TodoListContext } from '../../contexts/TodoListContext';
import Todo from '../todo/Todo';
import { TabContext } from '../../contexts/TabContext';

export default function Content() {
  const { todoList, setTodoList } = useContext(TodoListContext);
  const { tab } = useContext(TabContext);

  const handleUpdate = (updated) => {
    setTodoList(
      todoList.map((todo) => (todo.id === updated.id ? updated : todo))
    );
  };
  const handleDelete = (deleted) => {
    setTodoList(todoList.filter((todo) => todo.id !== deleted.id));
  };

  let showTodoList;
  switch (tab) {
    case 'completed':
      showTodoList = todoList.filter((todo) => todo.status);
      break;
    case 'active':
      showTodoList = todoList.filter((todo) => !todo.status);
      break;
    default:
      showTodoList = todoList;
      break;
  }

  return (
    <div className={styles.content}>
      {showTodoList.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
