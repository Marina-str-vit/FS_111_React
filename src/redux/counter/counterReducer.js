import { changeStep, decrement, increment, reset } from './actions';

//початкові дані, обов'язки за якими він дивиться: counter та step
const initialState = {
  counter: 0,
  step: 1,
};
// до назви обов'язково додаємо слово Reducer !!!
// зона відповідальності      частина склада        дії на складі, те що зможе робити
export const counterReducer = (state = initialState, action) => {
//приймає фуру по типу
  switch (action.type) {
  //подію яку він може виконати == збільшити
    case increment.type: {
      return {
        ...state,
        counter: state.counter + state.step,
      };
    }
  //подію яку він може виконати == зменшити 
    case decrement.type: {
      return {
        ...state,
        counter: state.counter - state.step,
      };
    }

    case reset.type: {
      return initialState;
    }

    case changeStep.type: {
      return {
        ...state,
        step: action.payload,
      };
    }
//завжди повинно бути
    default:
      return state;
  }
};
