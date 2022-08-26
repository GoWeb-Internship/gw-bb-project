import React, { useState, useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { getTelegramMessage, sendMessage } from 'services/telegramApi';
import useFormPersist from 'react-hook-form-persist'; // Библиотека для записи данных из формы в LocalStorage
import InputPhone from './InputPhone';
import { FiCheckSquare } from 'react-icons/fi';
import { FiSquare } from 'react-icons/fi';
import { ClientLocationContext } from 'context/ClientLocationContext';
import { toast } from 'react-toastify';
import * as yup from 'yup';

const isBrowser = typeof window !== 'undefined';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const Form = ({
  place,
  buttonClassName = '',
  buttonText = '',
  className = '',
}) => {
  const { t, i18n } = useTranslation();
  const formData = t('form', { returnObjects: true });
  const valid = t('validation', { returnObjects: true });
  const [checkbox, setCheckbox] = useState(false);
  const clientLocation = useContext(ClientLocationContext);
  const handler = useCallback(() => {
    setCheckbox(!checkbox);
  }, [checkbox]);

  const schema = yup.object({
    name: yup
      .string()
      .min(1, valid.name)
      .matches(
        /[a-zA-ZА-Яа-яґҐЁёІіЇїЄє0-9zñáéíóúüŁłĄąĘęŃńÓóŹźŻż_.]/,
        valid.required,
      )
      .required(valid.required),
    email: yup
      .string()
      .email(valid.email)
      .matches(
        /^[a-zA-Z0-9zñáéíóúüŁłĄąĘęŃńÓóŹźŻż+_.]+[a-zA-Z0-9zñáéíóúüŁłĄąĘęŃńÓóŹźŻż+_.-]+@[a-zA-Z0-9zñáéíóúüŁłĄąĘęŃńÓóŹźŻż_.-]+$/,
        valid.emailValid,
      )
      .required(valid.required),
    phone: yup.number().required(valid.required),
    isAgree: yup.boolean().default(false).oneOf([true], valid.required),
  });

  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  useFormPersist('form', {
    watch,
    setValue,
    storage: isBrowser ? window.localStorage : null,
    exclude: ['isAgree'], // не добавляет выбор чекбокса так как это запрещено)
  });

  const onSubmit = data => {
    const newData = { ...data, place: place };
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...newData }),
    })
      .then(() => {
        const message = getTelegramMessage({
          title: 'Заявка на зворотній дзвінок',
          hashTag: 'callbackorder',
          data,
          analysisData: place,
          sitelang: i18n.language,
        });
        sendMessage(message);
        toast.success(valid.toastSuccessful);
        reset({ name: '', email: '', phone: '', isAgree: false });
        setCheckbox(!checkbox);
        localStorage.removeItem('form');
      })
      .catch(error => {
        toast.error(valid.toastError);
      });
  };

  return (
    <form
      name="contact"
      className={`${className} mx-auto w-[280px] md:w-[410px]`}
      onSubmit={handleSubmit(onSubmit)}
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="mb-4 h-[69px]">
        <input
          placeholder={formData.inputName.name}
          className="px-5 min-w-[280px] py-4 text-bbForm rounded-[10px] md:w-[410px] border-slate-50 border bg-inherit placeholder:text-slate-50"
          {...register('name')}
        />
        <p className="px-5 text-[#ffa2a2] text-xs">{errors.name?.message}</p>
      </div>
      <div className="mb-4 h-[69px]">
        <input
          placeholder={formData.inputEmail.name}
          className="px-5 min-w-[280px] py-4 text-bbForm rounded-[10px] md:w-[410px] border-slate-50 border bg-inherit placeholder:text-slate-50"
          {...register('email')}
        />
        <p className="px-5 text-[#ffa2a2] text-xs">{errors.email?.message}</p>
      </div>
      <InputPhone
        control={control}
        errors={errors}
        language={i18n.language}
        country={clientLocation || 'ua'}
      />

      <label className="mb-12 font-main text-bb1424 font-light flex justify-items-center">
        <input
          type="checkbox"
          {...register('isAgree')}
          className="custom-checkbox absolute visually-hidden"
          onChange={handler}
        />
        {checkbox ? (
          <FiCheckSquare className="relative w-6 h-6 mr-[25px]" />
        ) : (
          <FiSquare className="relative w-6 h-6 mr-[25px]" />
        )}

        {formData.checkbox}
      </label>

      <button
        id={'form-button'}
        className={`mx-auto py-4 min-w-[280px] rounded-xl text-xl md:w-[410px] transition-colors duration-200 disabled:bg-cyan-700 ${buttonClassName}`}
        type="submit"
        disabled={!checkbox && true}
      >
        {buttonText}
      </button>
    </form>
  );
};

Form.propTypes = {
  place: PropTypes.string.isRequired,
  buttonClassName: PropTypes.string,
  buttonText: PropTypes.string,
  className: PropTypes.string,
};

export default Form;
