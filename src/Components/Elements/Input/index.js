import React from 'react';
import { TextInput } from 'react-native';
import { Controller } from 'react-hook-form';

import style from './styles';

const Input = ({
  control,
  name,
  rules,
  maxLength,
  placeholder,
  type,
  error,
  autoComplete = 'off',
  keyboard = 'default',
  styles = {},
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          onBlur={onBlur}
          style={[style(error).input, styles]}
          onChangeText={(value) => onChange(value)}
          value={value}
          autoCompleteType={autoComplete}
          keyboardType={keyboard}
          maxLength={maxLength}
          placeholder={placeholder}
          textContentType={type}
          secureTextEntry={type === 'password'}
        />
      )}
    />
  );
};

export default Input;
