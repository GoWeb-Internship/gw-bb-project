import React from 'react';
import { Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import ru from 'react-phone-input-2/lang/ru.json';
import ua from '../../assets/land/ua.json';

const loc = { ru, uk: ua };

const InputPhone = ({ control, errors, language, country = 'ua' }) => {
  const location = loc[language];

  return (
    <div className="mb-[32px]">
      <Controller
        name="phone"
        control={control}
        render={({ field: { onChange, value, name } }) => (
          <PhoneInput
            inputStyle={{
              padding: '16px 20px 16px 50px',
              fontSize: '16px',
              lineHeight: '1.18',
              borderRadius: '10px',
              width: '410px',
              border: ' 1px solid #F8FAFC',
              outline: 'none',
              backgroundColor: 'inherit',
              color: '#F8FAFC',
              boxShadow: 'none',
            }}
            buttonStyle={{
              height: '54px',
              borderRadius: '10px',
              outline: 'none',
            }}
            dropdownStyle={{
              color: '#525252',
              maxHeight: '180px',
            }}
            name={name}
            onChange={onChange}
            value={value}
            country={country}
            preferredCountries={['gb', 'ua']}
            localization={location}
          />
        )}
      />
      <p className="px-5 text-red-500 text-xs">{errors.phone?.message}</p>
    </div>
  );
};

export default InputPhone;
