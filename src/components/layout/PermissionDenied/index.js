import React from 'react';
import { openURL } from 'expo-linking';

import Button from 'components/elements/Button';

import { Wrapper, Title } from './styles';

const PermissionDenied = () => {
  return (
    <Wrapper>
      <Title>
        {`Location permission was denied 
        we need to show you the closest products`}
      </Title>
      <Button
        press={() => openURL('app-settings:')}
        text="Grant access"
        style={{ marginTop: '10%' }}
      />
    </Wrapper>
  );
};

export default PermissionDenied;
