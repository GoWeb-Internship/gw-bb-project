import React from 'react';
import { Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';
import ru from 'react-phone-input-2/lang/ru.json';

const InputPhone = ({ control, errors, label, placeholder }) => {
  return (
    <label htmlFor="phone">
      {label}
      <Controller
        control={control}
        rules={{
          minLength: 10,
          maxLength: 15,
        }}
        render={({ field: { onChange, value } }) => (
          <PhoneInput
            inputClass="h-5"
            onChange={onChange}
            value={value}
            country="ua"
            preferredCountries={['gb', 'ua', 'ru']}
            localization={ru}
          />
        )}
        name="phone"
      />
      <p className="text-red-400">{errors.phone?.message}</p>
    </label>
  );
};

export default InputPhone;
