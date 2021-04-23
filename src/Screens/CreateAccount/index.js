import React from 'react';
import { useNavigation } from '@react-navigation/native';

import CreateAccountButton from '../../Components/Elements/CreateAccountButton';
import { Wrapper, ButtonView } from './styles';

const CreateAccount = () => {
  const { navigate } = useNavigation();

  return (
    <Wrapper>
      <ButtonView>
        <CreateAccountButton
          icon="customer"
          choose={() => navigate('CreateCustomerAccount')}
          style={{ marginRight: 15 }}
        />
        <CreateAccountButton
          icon="provider"
          choose={() => navigate('CreateProviderAccount')}
          style={{ marginLeft: 15 }}
        />
      </ButtonView>
    </Wrapper>
  );
};

export default CreateAccount;
