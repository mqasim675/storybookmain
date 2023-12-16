import React from 'react';
import SignUpForm from './SignUpForm';

export default {
  title: 'Example/SignUpForm',
  component: SignUpForm,
};

export const Default = () => (
  <SignUpForm
    onSubmit={(formData) => {
      console.log('Form submitted with data:', formData);
    }}
  />
);
