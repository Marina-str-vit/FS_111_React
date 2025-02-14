import { useDispatch, useSelector } from 'react-redux';
import s from './Counter.module.css';
import { increment, decrement, reset, changeStep } from '../../redux/counterSlice';
//%% тут відбуваються дії клієнта-замовника,
export const Counter = () => {
//перше замовлення дати зі складу дані про counter та дані про step
//useSelector має доступ до всього складу
//                        весь склад   Склад.Зона_на_складі.Частина, що потрібна по запиту
  const counter = useSelector(state => state.counter.counter);
  const step = useSelector(state => state.counter.step);
//адмін, хук_redux котрий керує всіми процесами на складі, він ОДИН!! Диспетчер!
  const dispatch = useDispatch();
//%% замовник хоче збільшити значення, тоді ч/з dispatch йдемо у counter.js файл і дивимося, як це зробити
  const handlePlusClick = () => {
//dispatch({type: 'INKREMENT'}) це початкове пояснення
    dispatch(increment());
  };
//%% замовник хоче зменшити значення, тоді ч/з dispatch йдемо у counter.js файл і дивимося, як це зробити
  const handleMinusClick = () => {
    dispatch(decrement());
  };
//%% замовник хоче видалити значення, робить все адмін dispatch ч/з робітника reducer
  const handleResetClick = () => {
    dispatch(reset()); // які б зміни не були, поверне все до початкового значення
  };
//%% все ще лише бажання замовника, а робить все dispatch
// приїзжає фура і вигружає новий товар на склад payload - це навантаження, з ККомпонента може передаватися: об'єкт(якщо, щось створюю), строка(змінюю щось), ідентифікатор(якщо, щось видаляю), булеан
//dispatch({type: 'changeStep', payload:+e.target.value}) === type та payload == зарезервовані назви
  const handleChangeStep = e => {
    dispatch(changeStep(+e.target.value)); //для цього потрібно в єкшені зробити функцію
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
