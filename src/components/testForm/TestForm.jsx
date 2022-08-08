import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import * as yup from 'yup';
import { getTelegramMessage, sendMessage } from '../../services/telegramApi';

const schema = yup
  .object({
    name: yup.string().required(),
    phone: yup.number().required(),
    email: yup.string().email().required(),
  })
  .required();

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const TestForm = () => {
  const { t, i18n } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formData = t('form', { returnObjects: true });

  const onSubmit = data => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...data }),
    })
      .then(() => {
        const messsage = getTelegramMessage({
          title: 'Заявка на зворотній дзвінок',
          hashTag: 'customtag',
          dataMessage: data,
          analysisData: 'якісь аналітичні дані',
          sitelang: i18n.language,
        });
        sendMessage(messsage);
        reset({ name: '', phone: '', email: '' });
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
      <div className="my-1">
        <label className="m-1 block" htmlFor="phone">
          {formData.inputPhone.name}
        </label>
        <input
          placeholder={formData.inputPhone.placeholder}
          className="p-2 bg-slate-200 rounded-md text-xs w-72"
          {...register('phone')}
        />
        <p className="text-red-400 text-xs">{errors.phone?.message}</p>
      </div>
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
      <button className="p-2 text-white bg-sky-500 rounded-md" type="submit">
        {formData.button}
      </button>
    </form>
  );
};

export default TestForm;
