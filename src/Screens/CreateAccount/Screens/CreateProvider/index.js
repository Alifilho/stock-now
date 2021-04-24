import React from 'react';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Col, Row, Grid } from 'react-native-easy-grid';

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
        <Grid>
          <Col>
            <Input
              control={control}
              name="storeName"
              rules={{ required: true }}
              maxLength={70}
              placeholder="Store Name"
              type="organizationName"
              error={errors.storeName}
            />
            {errors.storeName && (
              <FormErrorMessage>This is required.</FormErrorMessage>
            )}

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
            {errors.email && (
              <FormErrorMessage>This is required.</FormErrorMessage>
            )}

            <Input
              control={control}
              name="cnpj"
              rules={{ required: true }}
              maxLength={14}
              placeholder="CNPJ"
              type="none"
              error={errors.cnpj}
            />
            {errors.cnpj && (
              <FormErrorMessage>This is required.</FormErrorMessage>
            )}

            <Input
              control={control}
              name="cnpj"
              rules={{ required: true }}
              maxLength={14}
              placeholder="CNPJ"
              type="none"
              error={errors.cnpj}
            />
            {errors.cnpj && (
              <FormErrorMessage>This is required.</FormErrorMessage>
            )}

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
              name="phone"
              rules={{ required: true }}
              maxLength={11}
              placeholder="Phone"
              type="telephoneNumber"
              autoComplete="tel"
              keyboard="phone-pad"
              error={errors.phone}
            />
            {errors.phone && (
              <FormErrorMessage>This is required.</FormErrorMessage>
            )}
          </Col>
          <Col></Col>

          <Button
            style={{ marginTop: '10%' }}
            press={handleSubmit(onSubmit)}
            text="Sign Up"
          />
        </Grid>
      </View>
    </SafeAreaView>
  );
};

export default CreateProviderAccount;
