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
        reset({ name: '', email: '', phone: '', isAgree: false });
        localStorage.removeItem('form');
      })
      .catch(error => alert(error));
  };

  return (
    <form
      name="contact"
      className="mx-auto w-[410px]"
      onSubmit={handleSubmit(onSubmit)}
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" {...register('place')} value={place} />
      <div className="mb-8">
        <input
          placeholder={formData.inputName.name}
          className="px-5 py-4 text-bbForm rounded-[10px] w-[410px] border-slate-50 border outline-none bg-inherit placeholder:text-slate-50"
          {...register('name')}
        />
        <p className="px-5 text-red-500 text-xs">{errors.name?.message}</p>
      </div>
      <div className="mb-8">
        <input
          placeholder={formData.inputEmail.name}
          className="px-5 py-4 text-bbForm rounded-[10px] w-[410px] border-slate-50 border outline-none bg-inherit placeholder:text-slate-50"
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
      <div className="mb-12 flex items-center">
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
        className={`mx-auto py-4 rounded-xl text-xl lg:w-[410px] ${buttonClassName}`}
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
