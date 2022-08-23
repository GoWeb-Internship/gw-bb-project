import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { getTelegramMessage, sendMessage } from 'services/telegramApi';
import useFormPersist from 'react-hook-form-persist'; // Библиотека для записи данных из формы в LocalStorage
import InputPhone from './InputPhone';
import { LOCATION_STORAGE_KEY } from 'hooks/useClientLocation';
import { FiCheckSquare } from 'react-icons/fi';
import { FiSquare } from 'react-icons/fi';
import * as yup from 'yup';

const isBrowser = typeof window !== 'undefined';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const Form = ({ place, buttonClassName = '', buttonText = '' }) => {
  const { t, i18n } = useTranslation();
  const formData = t('form', { returnObjects: true });
  const valid = t('validation', { returnObjects: true });
  const [checkbox, setCheckbox] = useState(false);
  const handler = useCallback(() => {
    setCheckbox(!checkbox);
  }, [checkbox]);
  const country = isBrowser
    ? sessionStorage.getItem(LOCATION_STORAGE_KEY) || 'ua'
    : null;

  const schema = yup.object({
    name: yup.string().min(1, valid.name).required(valid.required),
    email: yup.string().email(valid.email).required(valid.required),
    phone: yup.number().required(valid.required),
    isAgree: yup.boolean().default(false).oneOf([true]),
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
          hashTag: 'customtag',
          data,
          analysisData: place,
          sitelang: i18n.language,
        });
        sendMessage(message);
        reset({ name: '', email: '', phone: '', isAgree: false });
        localStorage.removeItem('form');
      })
      .catch(error => alert(error));
  };

  return (
    <form
      name="contact"
      className="mx-auto w-[280px] md:w-[410px]"
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
        <p className="px-5 text-red-500 text-xs">{errors.name?.message}</p>
      </div>
      <div className="mb-4 h-[69px]">
        <input
          placeholder={formData.inputEmail.name}
          className="px-5 min-w-[280px] py-4 text-bbForm rounded-[10px] md:w-[410px] border-slate-50 border bg-inherit placeholder:text-slate-50"
          {...register('email')}
        />
        <p className="px-5 text-red-500 text-xs">{errors.email?.message}</p>
      </div>
      <InputPhone
        control={control}
        errors={errors}
        language={i18n.language}
        country={country}
      />

      <label className="mb-12 font-main text-bb1424 font-light flex justify-items-center">
        {checkbox ? (
          <FiCheckSquare className="relative w-6 h-6 mr-[25px]" />
        ) : (
          <FiSquare className="relative w-6 h-6 mr-[25px]" />
        )}
        <input
          type="checkbox"
          {...register('isAgree')}
          className=" absolute visually-hidden"
          onChange={handler}
        />

        {formData.checkbox}
      </label>

      <button
        className={`mx-auto py-4 min-w-[280px] rounded-xl text-xl md:w-[410px] transition-colors duration-200 ${buttonClassName}`}
        type="submit"
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
};

export default Form;
