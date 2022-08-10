import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { getTelegramMessage, sendMessage } from '../../services/telegramApi';
import useFormPersist from 'react-hook-form-persist'; // Библиотека для записи данных из формы в LocalStorage
import InputPhone from './InputPhone';
import * as yup from 'yup';

const schema = yup
  .object({
    name: yup.string().required(),
    phone: yup.number().required(),
    email: yup.string().email().required(),
    isAgree: yup.boolean().default(false).oneOf([true]),
  })
  .required();

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const TestForm = ({ place }) => {
  const { t, i18n } = useTranslation();
  const formData = t('form', { returnObjects: true });

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
    storage: window.localStorage, // по умолчанию используется window.sessionStorage
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
          analysisData: 'якісь аналітичні дані',
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
        <label className="m-1 block" htmlFor="name">
          {formData.inputName.name}
        </label>
        <input
          placeholder={formData.inputName.placeholder}
          className="p-2 bg-slate-200 rounded-md text-xs w-72"
          {...register('name')}
        />
        <p className="text-red-400 text-xs">{errors.name?.message}</p>
      </div>
      <InputPhone
        control={control}
        errors={errors}
        label={formData.inputPhone.name}
        language={i18n.language}
      />
      <div className="my-1">
        <label className="m-1 block" htmlFor="email">
          {formData.inputEmail.name}
        </label>
        <input
          placeholder={formData.inputEmail.placeholder}
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
      <button className="p-2 text-white bg-sky-500 rounded-md" type="submit">
        {formData.button}
      </button>
    </form>
  );
};

export default TestForm;
