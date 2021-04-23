import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Wrapper, TextButton } from './styles';

const Button = ({ text, icon, press, style }) => {
  return (
    <Wrapper onPress={press} style={style}>
      {icon && <Ionicons name={icon} size={20} color="#666666" />}
      <TextButton style={icon && { marginLeft: 8 }}>{text}</TextButton>
    </Wrapper>
  );
};

export default Button;
