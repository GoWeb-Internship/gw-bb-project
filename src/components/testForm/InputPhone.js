import React from 'react';
import { Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css'; // согласно макета нам этот стиль подходит больше всего, но есть сложность со стилизацией с помощью tailwind
import ru from 'react-phone-input-2/lang/ru.json';
import ua from '../../assets/land/ua.json'; // файлик нужно исправлять, сделала только пару стран чтобы посмотреть. Шаблон из либы в файлике example.json

const InputPhone = ({ control, errors, label, language }) => {
  let country;
  let location;

  switch (language) {
    case 'uk':
      country = 'ua';
      location = ua;
      break;
    case 'ru':
      country = 'ru';
      location = ru;
      break;
    case 'en':
      country = 'gb';
      location = undefined;
      break;
    default:
      country = 'ua';
      location = ua;
  }

  return (
    <label htmlFor="phone">
      {label}
      <Controller
        control={control}
        rules={{
          maxLength: 15,
        }}
        render={({ field: { onChange, value } }) => (
          <PhoneInput
            inputClass="h-5"
            onChange={onChange}
            value={value}
            country={country}
            preferredCountries={['gb', 'ua', 'ru']}
            localization={location}
          />
        )}
        name="phone"
      />
      <p className="text-red-400 text-xs">{errors.phone?.message}</p>
    </label>
  );
};

export default InputPhone;
