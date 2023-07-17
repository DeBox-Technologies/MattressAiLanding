import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const API_KEY = import.meta.env.VITE_APP_MAILCHIMP_API_KEY
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://us8.api.mailchimp.com/3.0/lists/<list_id>/members',
        {
          email_address: email,
          status: 'subscribed',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'apikey ${API_KEY}',
          },
        }
      );

      console.log(response.data); // Handle success

      // Optionally, display a success message or redirect the user
    } catch (error) {
      console.error(error); // Handle error

      // Optionally, display an error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleInputChange}
        className='text-gray-700 dark:-primary-50 bg-primary-50/70 dark:bg-gray-800/60 border-2 dark:border-secondary-50/70 rounded-lg px-4 py-2 w-80 md:w-96 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-100'
      />
      <button type="submit" className='bg-primary-200 hover:bg-primary-200/70 active:bg-primary-200/90  ml-2 py-2 px-4 border-2 border-primary-200 rounded-lg text-secondary-50'>Subscribe</button>
    </form>
  );
};

export default SignupForm;
