import React, { useState } from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm } from 'react-hook-form';

import Input from '../../../../../components/elements/Input';
import FormErrorMessage from '../../../../../components/elements/FormErrorMessage';
import Button from '../../../../../components/elements/Button';
import Select from '../../../../../components/elements/Select';

import states from '../../../../../services/states.json';

const AddressForm = () => {
  const { params } = useRoute();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [state, setState] = useState();

  const onSubmit = (data) => console.log(data);

  return (
    <SafeAreaView
      style={{ minWidth: '100%', minHeight: '100%', alignItems: 'center' }}
    >
      <View style={{ marginTop: -25, minWidth: '60%' }}>
        <Input
          control={control}
          name="cep"
          rules={{ required: true }}
          maxLength={6}
          placeholder="CEP"
          autoComplete="postal-code"
          keyboard="numeric"
          type="postalCode"
          error={errors.cep}
        />
        {errors.cep && <FormErrorMessage>This is required.</FormErrorMessage>}

        <Input
          control={control}
          name="address"
          rules={{ required: true }}
          maxLength={70}
          placeholder="Address"
          autoComplete="street-address"
          type="fullStreetAddress"
          error={errors.address}
        />
        {errors.address && (
          <FormErrorMessage>This is required.</FormErrorMessage>
        )}

        <Input
          control={control}
          name="number"
          rules={{ required: true }}
          maxLength={10}
          placeholder="Number"
          type="none"
          keyboard="numeric"
          error={errors.number}
        />
        {errors.number && (
          <FormErrorMessage>This is required.</FormErrorMessage>
        )}

        <Input
          control={control}
          name="city"
          rules={{ required: true }}
          maxLength={70}
          placeholder="City"
          type="addressCity"
          error={errors.city}
        />
        {errors.city && <FormErrorMessage>This is required.</FormErrorMessage>}

        <Select list={states} selected={state} setSelected={setState} />

        <Button
          style={{ marginTop: '10%' }}
          press={handleSubmit(onSubmit)}
          text="Sign Up"
        />
      </View>
    </SafeAreaView>
  );
};

export default AddressForm;
