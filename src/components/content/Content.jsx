import React, { useContext } from 'react';
import styles from './Content.module.css';
import { TodoListContext } from '../../contexts/TodoListContext';
import Todo from '../todo/Todo';
import { TabContext } from '../../contexts/TabContext';

export default function Content() {
  const { todoList } = useContext(TodoListContext);
  const { tab } = useContext(TabContext);

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
        <Todo key={todo.id} id={todo.id} />
      ))}
    </div>
  );
}
