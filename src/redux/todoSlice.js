import { createSlice } from '@reduxjs/toolkit';
//базова заглушка, щоб було видно, хоч якийсь інтерфейс
const initialState = {
  items: [{ id: 1, todo: 'Learn redux', isCompleted: false }],
};

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    deleteTodo: (state, action) => {
    // все, що передаю в функ. виклику діспатч в () потрапляє в action.payload
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    addTodo: (state, action) => {
    // півд капотом бібліотека immer, тому ніяких розсипать не потрібно
      state.items.push(action.payload);
    },
    editTodo: (state, action) => {
      // 1. Отримати айді і отримати новий текст
      // 2. Пробігти по масиву
      // 3. Знайти потрібний елемент по айді
      // 4. Поміняти тому елементу тайтл
      const item = state.items.find(item => item.id === action.payload.id);
      item.todo = action.payload.todo;
    },
  },
});

export const todoReducer = slice.reducer;
export const { deleteTodo, addTodo, editTodo } = slice.actions;
