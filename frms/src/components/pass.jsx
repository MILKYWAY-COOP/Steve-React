import React from 'react';
import { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    join: false
  });

  const { email, password, confirmPassword, join } = formData;

  function handleChange(event) {
    //destructure the event.target.name and event.target.value
    const { name, value, type, checked } = event.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: type === 'checkbox' ? checked : value
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (password.length < 8) {
      alert('Password must be at least 8 characters');
      return false;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return false;
    }
    if (join === true) {
      alert('You have joined the site');
    }
    console.log(formData);
  }

  return (
    <div className='form-container'>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='email'
          name='email'
          placeholder='Email address'
          className='form--input'
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          className='form--input'
          onChange={handleChange}
          value={formData.password}
        />
        <input
          type='password'
          name='confirmPassword'
          placeholder='Confirm password'
          className='form--input'
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <div className='form--marketing'>
          <input
            id='okayToEmail'
            type='checkbox'
            name='join'
            value={formData.join}
            onChange={handleChange}
          />
          <label htmlFor='okayToEmail'>I want to join the newsletter</label>
        </div>
        <button className='form--submit'>Sign up</button>
      </form>
    </div>
  );
}

export default Login;
