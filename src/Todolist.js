import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, updateTodo, deleteTodo } from './features/todoSlice';

const Todolist = () => {

    
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState(null);

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      if (editingId) {
        dispatch(updateTodo({ id: editingId, text }));
        setEditingId(null);
      } else {
        dispatch(addTodo({ id: Date.now(), text }));
      }
      setText('');
    }
  };

  const handleEditTodo = id => {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
      setText(todo.text);
      setEditingId(id);
    }
  };

  const handleDeleteTodo = id => {
    dispatch(deleteTodo(id));
  };
  return (
    <div className="App">
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button onClick={handleAddTodo}>
          {editingId ? 'Update Todo' : 'Add Todo'}
        </button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleEditTodo(todo.id)}>Edit</button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist