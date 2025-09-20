import React from 'react';
import AuthLayout from '../../components/Layouts/AuthLayout';
import FormLogin from '../../components/Fragments/FormLogin';

const LoginPage = () => {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to your account"
    >
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
