import { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import useLocalStorage from './hooks/useLocalStorage';

const App = () => {
  function playSound(soundpath) {
    const audio = new Audio(soundpath);
    audio.play();
  }

  // const [todos, setTodos] = useState([]);
  const [todos, setTodos] = useLocalStorage('todos', []);

  const [input, setInput] = useState('');

  const handleAddTodos = (newTodo) => {
    const newTodoList = [newTodo, ...todos];
    setTodos(newTodoList);
  };

  const handleDeleteTodo = (index) => {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    setTodos(newTodoList);
  };

  const handleEditTodo = (index) => {
    const valueToBeEdited = todos[index];
    setInput(valueToBeEdited);
    handleDeleteTodo(index);
  };

  return (
    <>
      <nav className="heading">
        <h1>Todo List</h1>
      </nav>
      <TodoInput
        playSound={playSound}
        input={input}
        setInput={setInput}
        handleAddTodos={handleAddTodos}
      />
      <TodoList
        playSound={playSound}
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
      />
    </>
  );
};

export default App;
