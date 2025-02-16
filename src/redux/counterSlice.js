import { createSlice } from '@reduxjs/toolkit';

// 1. Створити початковий стан
// 2. Створити слайс
// 3. Дати йому імʼя
// 4. Передати йому стан
// 5. Прописати reducers: {}
// 6. Експортувати counterReducer = slice.reducer
// 7. Підключити в сторі новий слайс замість редьюсера старого
// 8. Додати функції у редюсерс
// 9. Експортувати екшени (наші маленькі фукнції з reducers) з slice.actions
// 10. Використати нові функції в компонентах вже імпортуючи їх з слайсу

const initialState = {
  step: 1,
  counter: 0,
};
// базове налаштування, відповідає лише за свою зону counter
const slice = createSlice({
// назва слайсу  name: 'counter'
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.counter += state.step;
    },
    decrement: (state, action) => {
      state.counter -= state.step;
    },
    reset: (state, action) => {
  //повертаюсь до початкового значення
      return initialState;
    },
    changeStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

//тут вже ми відправляємо у стор для роботи
export const counterReducer = slice.reducer;
//ці міні-функції буду використовувати замість констант з action.js, зменшили кількість файлів, та змінити у компоненті шлях доступу до Ешенів
export const { increment, decrement, reset, changeStep } = slice.actions;
