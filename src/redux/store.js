import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './counterSlice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { todoReducer } from './todoSlice';
import { filterReducer } from './filterSlice';

const persistConfig = {
  key: 'counter-persist',
  version: 1,
  storage,
  // те що НЕ буде зберігатися в локалсторідже. Якщо підти в Аплікейшн, локалСторідж, вибрати персіст, то внизу побачимо дані, що ми зберигли
  blacklist: ['step'],
  //зберігає лише те, що ми вкажимо
  // whitelist: ['step'],
};

//BLL - бізнес-логіка
//         склад     слово з якого створюється склад 
export const store = configureStore({
//працівники на складі
  reducer: {
//зони на складі
    counter: persistReducer(persistConfig, counterReducer),
    todos: todoReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    // промежуточное ПО, воно потрібно для бекенда
    getDefaultMiddleware({
      serializableCheck: {
    //це ми ігноруємо, бо воно нам не потрібно, а в прогі воно указано, бо вони працюють без нас
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
