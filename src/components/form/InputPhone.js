import React from 'react';
import { Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import ru from 'react-phone-input-2/lang/ru.json';
import ua from '../../assets/land/ua.json';

const loc = { ru, uk: ua };

const InputPhone = ({ control, errors, language, country }) => {
  const location = loc[language];

  return (
    <div className="mb-4 h-[69px]">
      <Controller
        name="phone"
        control={control}
        rules={{
          pattern: '',
        }}
        render={({ field: { onChange, value } }) => (
          <PhoneInput
            containerClass={'input-container'}
            inputClass="input-phone"
            buttonClass="input-drop"
            dropdownStyle={{
              color: '#525252',
              maxHeight: '180px',
            }}
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
