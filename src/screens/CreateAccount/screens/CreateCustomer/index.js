import React from 'react';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';
import { SafeAreaView } from 'react-native-safe-area-context';

import Input from 'components/elements/Input';
import FormErrorMessage from 'components/elements/FormErrorMessage';
import Button from 'components/elements/Button';

const CreateCustomerAccount = () => {
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
          placeholder="Name"
          type="name"
          autoComplete="name"
          error={errors.name}
        />
        {errors.name && <FormErrorMessage>This is required.</FormErrorMessage>}

        <Input
          control={control}
          name="email"
          rules={{ required: true }}
          maxLength={70}
          placeholder="Email"
          type="emailAddress"
          autoComplete="email"
          keyboard="email-address"
          error={errors.email}
        />
        {errors.email && <FormErrorMessage>This is required.</FormErrorMessage>}

        <Input
          control={control}
          name="password"
          rules={{ required: true }}
          maxLength={70}
          placeholder="Password"
          type="password"
          autoComplete="password"
          error={errors.password}
        />
        {errors.password && (
          <FormErrorMessage>This is required.</FormErrorMessage>
        )}

        <Input
          control={control}
          name="confirmPassword"
          rules={{ required: true }}
          maxLength={70}
          placeholder="Confirm Password"
          type="password"
          autoComplete="password"
          error={errors.confirmPassword}
        />
        {errors.confirmPassword && (
          <FormErrorMessage>This is required.</FormErrorMessage>
        )}

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

export default CreateCustomerAccount;
