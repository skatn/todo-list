import React from 'react';
import styles from './App.module.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { TodoListProvider } from './contexts/TodoListContext';
import Content from './components/content/Content';
import { TabProvider } from './contexts/TabContext';

function App() {
  return (
    <TabProvider>
      <TodoListProvider>
        <div className={styles.container}>
          <Header />
          <Content />
          <Footer />
        </div>
      </TodoListProvider>
    </TabProvider>
  );
}

export default App;
