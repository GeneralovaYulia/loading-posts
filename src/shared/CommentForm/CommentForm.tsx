import React, { ChangeEvent, FormEvent } from 'react';
import styles from './commentform.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, updateComment } from '../../store/store';
import { useForm } from 'react-hook-form';

type ITextArea = {
  comment: string,
}

type Props = {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (event: FormEvent) => void;
}

export function CommentForm({ value, onChange }: Props) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm<ITextArea>();

  const onSubmit = () => {
    alert('Форма отправлена!');
    dispatch(updateComment(''));
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <textarea
        {...register('comment', {
          required: true,
          minLength: 4,
          maxLength: 20,
        })}
        name='comment'
        id=''
        className={styles.input}
        value={value}
        onChange={onChange} />
      {errors.comment && (<p>Минимальная длина 4 символа</p>)}
      <button type='submit' className={styles.button}>Комментировать</button>
    </form>
  );
}
