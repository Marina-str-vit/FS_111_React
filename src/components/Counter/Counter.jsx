import { useDispatch, useSelector } from 'react-redux';
import s from './Counter.module.css';
import { increment, decrement, reset, changeStep } from '../../redux/counterSlice';

export const Counter = () => {
//перше замовлення дати зі складу дані про counter та дані про step
//useSelector має доступ до всього складу
//                        весь склад   Склад.Зона_на_складі.Частина, що потрібна по запиту
  const counter = useSelector(state => state.counter.counter);
  const step = useSelector(state => state.counter.step);
//адмін, хук_redux котрий керує всіми процесами на складі, вона ОДНА!! Диспечер!
  const dispatch = useDispatch();

  const handlePlusClick = () => {
//dispatch({type: 'INKREMENT'}) це початкове пояснення
    dispatch(increment());
  };

  const handleMinusClick = () => {
    dispatch(decrement());
  };

  const handleResetClick = () => {
    dispatch(reset());
  };

  const handleChangeStep = e => {
    dispatch(changeStep(+e.target.value));
  };

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <input value={step} onChange={handleChangeStep} />
        <div className={s.flex}>
          <button className='btn' onClick={handleMinusClick}>
            minus
          </button>
          <button className='btn' onClick={handleResetClick}>
            reset
          </button>
          <button className='btn' onClick={handlePlusClick}>
            plus
          </button>
        </div>
      </div>
    </div>
  );
};
