import React from 'react';

import { Wrapper, TextButton } from './styles';

const Button = ({ text, press, style }) => {
  return (
    <Wrapper onPress={press} style={style}>
      <TextButton>{text}</TextButton>
    </Wrapper>
  );
};

export default Button;
