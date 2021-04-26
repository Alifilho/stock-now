import React from 'react';
import { Text, ScrollView } from 'react-native';

import Header from 'components/layout/Header';

import { Wrapper, Historic } from './styles';

const sampleHistoric = [
  { id: 1, productName: 'PS4 Controller', price: 325.5 },
  { id: 2, productName: 'X-Box One X Controller', price: 450 },
  { id: 3, productName: 'Nintendo Switch Controller', price: 500.5 },
];

const Profile = () => {
  return (
    <Wrapper>
      <Header user="User" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ minWidth: '80%' }}
      >
        {sampleHistoric.map((item) => (
          <Historic key={item.id}>
            <Text style={{ fontWeight: '600' }}>{item.productName}</Text>
            <Text>{`R$: ${item.price.toFixed(2)}`}</Text>
          </Historic>
        ))}
      </ScrollView>
    </Wrapper>
  );
};

export default Profile;
