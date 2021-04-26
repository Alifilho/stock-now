import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Wrapper, Title } from './styles';

const CreateAccountButton = ({ choose, icon, style }) => {
  return (
    <Wrapper style={style} onPress={() => choose()}>
      <Ionicons
        name={icon === 'customer' ? 'person-outline' : 'cart-outline'}
        size={30}
        color="#666666"
      />
      <Title>{icon === 'customer' ? 'Customer' : 'Provider'}</Title>
    </Wrapper>
  );
};

export default CreateAccountButton;
