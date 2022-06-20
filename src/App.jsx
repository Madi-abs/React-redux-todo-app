import './App.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTodo, fetchTodos } from './store/todoSlice';
import TodoList from './components/TodoList';
import InputField from './components/InputField';

function App() {

  const [ text, setText ] = useState('');
  const { status, error } = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addNewTodo(text));
    setText('');
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="todo">
      <h1 className='todo__title'>React-redux Todo App</h1>
      <div className="wrapper">
        <InputField text={text} setText={setText} addTodo={addTask} />
        {status === 'loading' && <h2>Loading...</h2>}
        {error && <h2>An error occured: {error}!</h2>}
        <TodoList />
      </div>
      
    </div>
  );
}

export default App;
