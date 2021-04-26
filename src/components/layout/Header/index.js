import React from 'react';
import { Text } from 'react-native';

import { Wrapper } from './styles';

const Header = ({ user }) => {
  return (
    <Wrapper>
      <Text style={{ fontWeight: 'bold' }}>{user}</Text>
    </Wrapper>
  );
};

export default Header;
