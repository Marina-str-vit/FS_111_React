import { createAction } from '@reduxjs/toolkit';

//ЦЕ МОЖЕ БУТИ В СТАРИХ КОДАХ
// зберігаємо значення, щоб потім легше була перевірка

// export const reset = { type: 'reset' };
// export const increment = { type: 'INCREMENT' };
// export const decrement = { type: 'DECREMENT' };

// функц. для зміни значення step
// export const changeStep = newStep => {
//   return {
//     type: 'changeStep',
//     payload: newStep,
//   };
// };

// НОВА ВЕРСІЯ reduxjs/toolkit дозволяє все скоротити !!! Головне використовувати createAction
export const reset = createAction('reset');
export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const changeStep = createAction('changeStep'); // тут також нічого зайвого не пишем

// console.log(changeStep());
// console.log(changeStep(10));
// console.log(changeStep({ name: 'PEDRO' }));
