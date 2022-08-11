import React from 'react';
import { Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import ru from 'react-phone-input-2/lang/ru.json';
import ua from '../../assets/land/ua.json'; // файлик нужно исправлять, сделала только пару стран чтобы посмотреть. Шаблон из либы в файлике example.json

const loc = { ru, uk: ua };

const InputPhone = ({ control, errors, label, language, country = 'ua' }) => {
  const location = loc[language];

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
            preferredCountries={['gb', 'ua']}
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
