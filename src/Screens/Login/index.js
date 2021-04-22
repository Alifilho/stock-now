import React from 'react';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';

import Input from '../../Components/Elements/Input';

import { Wrapper, Form, Title } from './styles';
import FormErrorMessage from '../../Components/Elements/FormErrorMessage';
import Button from '../../Components/Elements/Button';

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Wrapper>
      <Form>
        <Title>Login</Title>
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
          styles={{ marginTop: '3%', minWidth: '60%' }}
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
          styles={{ marginTop: '3%', minWidth: '60%' }}
        />
        {errors.password && (
          <FormErrorMessage>This is required</FormErrorMessage>
        )}

        <View style={{ alignItems: 'flex-end' }}>
          <Button
            style={{ marginTop: '10%' }}
            press={handleSubmit(onSubmit)}
            text="Sign In"
          />
        </View>
      </Form>
    </Wrapper>
  );
};

export default Login;
