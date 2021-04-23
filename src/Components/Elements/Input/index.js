import React from 'react';
import { TextInput } from 'react-native';
import { Controller } from 'react-hook-form';

import defaultStyle from './styles';

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
  style = {},
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          onBlur={onBlur}
          style={[defaultStyle(error).input, style]}
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
