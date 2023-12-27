'use client'

import React from 'react';
import { useController } from 'react-hook-form';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';


type FormValue = {
  phoneNumber: string;
}
type PhoneNumberInputProps = {
  className?: string;
  name: string
};



export const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({ className, name }) => {
  const {
    field: { onChange, onBlur, value, ref },
    formState: { errors },
  } = useController({
    name,
  });


  const onChangeValue = (phoneNumber: string) => {
    onChange(phoneNumber);
  };

  return (
    <>
      <PhoneInput
        ref={ref}
        value={value}
        onChange={onChangeValue}
        onBlur={onBlur}
        defaultCountry="ua"
        className={className}
        style={{ width: '100%', maxWidth: '500px' }}
      />
    </>
  );
};