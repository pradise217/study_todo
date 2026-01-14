import { useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'react base',
      checked: true,
    },
    {
      id: 2,
      text: 'react styling',
      checked: true,
    },
    {
      id: 3,
      text: 'schdual management',
      checked: false,
    },
  ]);

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default App;
