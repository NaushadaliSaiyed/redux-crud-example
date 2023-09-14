// src/features/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter(todo => todo.id !== id);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
