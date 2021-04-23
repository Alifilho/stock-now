import React from 'react';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';
import { SafeAreaView } from 'react-native-safe-area-context';

import Input from '../../../../Components/Elements/Input';
import FormErrorMessage from '../../../../Components/Elements/FormErrorMessage';
import Button from '../../../../Components/Elements/Button';

const CreateProviderAccount = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <SafeAreaView
      style={{ minWidth: '100%', minHeight: '100%', alignItems: 'center' }}
    >
      <View style={{ marginTop: -25, minWidth: '60%' }}>
        <Input
          control={control}
          name="name"
          rules={{ required: true }}
          maxLength={70}
          placeholder="Store Name"
          type="organizationName"
          autoComplete="name"
          error={errors.name}
        />
        {errors.name && <FormErrorMessage>This is required.</FormErrorMessage>}

        <Input
          control={control}
          name="address"
          rules={{ required: true }}
          maxLength={70}
          placeholder="Address"
          type="fullStreetAddress"
          autoComplete="street-address"
          error={errors.address}
        />
        {errors.address && (
          <FormErrorMessage>This is required.</FormErrorMessage>
        )}

        <Input
          control={control}
          name="number"
          rules={{ required: true }}
          maxLength={5}
          placeholder="Number"
          type="streetAddressLine2"
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

        <Input
          control={control}
          name="cpf"
          rules={{ required: true }}
          maxLength={11}
          placeholder="CPF"
          type="none"
          keyboard="numeric"
          error={errors.cpf}
        />
        {errors.cpf && <FormErrorMessage>This is required.</FormErrorMessage>}

        <Input
          control={control}
          name="cep"
          rules={{ required: true }}
          maxLength={70}
          placeholder="CEP"
          type="postalCode"
          autoComplete="postal-code"
          error={errors.cep}
        />
        {errors.cep && <FormErrorMessage>This is required.</FormErrorMessage>}

        <Button
          style={{ marginTop: '10%' }}
          press={handleSubmit(onSubmit)}
          text="Sign Up"
        />
      </View>
    </SafeAreaView>
  );
};

export default CreateProviderAccount;
