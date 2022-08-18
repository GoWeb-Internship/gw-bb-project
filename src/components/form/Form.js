import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { getTelegramMessage, sendMessage } from 'services/telegramApi';
import useFormPersist from 'react-hook-form-persist'; // Библиотека для записи данных из формы в LocalStorage
import InputPhone from './InputPhone';
import * as yup from 'yup';

const isBrowser = typeof window !== 'undefined';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const Form = ({
  place,
  country = 'ua',
  buttonClassName = '',
  buttonText = '',
}) => {
  const { t, i18n } = useTranslation();
  const formData = t('form', { returnObjects: true });
  const valid = t('validation', { returnObjects: true });

  const schema = yup.object({
    name: yup.string().min(1, valid.name).required(valid.required),
    phone: yup.number().required(valid.required),
    email: yup.string().email(valid.email).required(valid.required),
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
    console.log(data);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...data }),
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
        reset({ name: '', phone: '', email: '', isAgree: false });
        localStorage.removeItem('form');
      })
      .catch(error => alert(error));
  };

  return (
    <form
      name="contact"
      className="p-4"
      onSubmit={handleSubmit(onSubmit)}
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" {...register('place')} value={place} />
      <div className="my-1">
        <input
          placeholder={formData.inputName.name}
          className="p-2 bg-slate-200 rounded-md text-xs w-72"
          {...register('name')}
        />
        <p className="text-red-400 text-xs">{errors.name?.message}</p>
      </div>
      <InputPhone
        control={control}
        errors={errors}
        language={i18n.language}
        country={country}
      />
      <div className="my-1">
        <input
          placeholder={formData.inputEmail.name}
          className="p-2 bg-slate-200 rounded-md text-xs w-72"
          {...register('email')}
        />
        <p className="text-red-400 text-xs">{errors.email?.message}</p>
      </div>
      <div className="my-1 flex items-center text-gray-500">
        <input
          type="checkbox"
          id="isAgree"
          {...register('isAgree')}
          className="mr-2"
        />
        <label className="text-sm" htmlFor="isAgree">
          {formData.checkbox}
        </label>
      </div>
      <button
        className={`p-2 text-white bg-sky-500 rounded-md ${buttonClassName}`}
        type="submit"
      >
        {buttonText}
      </button>
    </form>
  );
};

Form.propTypes = {
  place: PropTypes.string.isRequired,
  country: PropTypes.string,
  buttonClassName: PropTypes.string,
  buttonText: PropTypes.string,
};

export default Form;
