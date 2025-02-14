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
  blacklist: ['step'],
  // whitelist: ['step'],
};
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
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
