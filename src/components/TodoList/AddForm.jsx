import { Field, Form, Formik } from 'formik';
import s from './TodoList.module.css';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todoSlice';

export const AddForm = () => {
  const initialValues = { todo: '' };
  const dispatch = useDispatch();
// values - це всі значення нашої форми!! вони знаходяться в initialValues в Formik
  const onSubmit = (values, options) => {
    const newObj = {
      todo: values.todo,
      isCompleted: false,
      // crypto.randomUUID() - це вбудована в ноде.джс функціональнісь, як сеттаймаут
      id: crypto.randomUUID(),
    };
    dispatch(addTodo(newObj));
    options.resetForm();
  };

  return (
    <div className={s.addFormWrapper}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field className={s.input} name='todo' placeholder='Enter new todo' />
          <button type='submit'>Add todo</button>
        </Form>
      </Formik>
    </div>
  );
};
