import React from 'react';
import './style.css';

export default function SignUp() {
  const [formInputs, setFormInputs] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
    newsLetter: false
  });

  function handleSubmit(event) {
    event.preventDefault();
    formInputs.password === formInputs.confirmPassword
      ? console.log('Successfully signed up')
      : console.log('passwords to not match');
    formInputs.newsLetter &&
      console.log('Thanks for signing up for our newsletter');
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormInputs((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value
      };
    });
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          name="email"
          onChange={handleChange}
          value={formInputs.email}
        />

        <input
          type="password"
          placeholder="Password"
          className="form--input"
          name="password"
          onChange={handleChange}
          value={formInputs.password}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="form--input"
          name="confirmPassword"
          onChange={handleChange}
          value={formInputs.confirmPassword}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            name="newsLetter"
            onChange={handleChange}
            checked={formInputs.newsLetter}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>

        <button className="form--submit">SIGN UP</button>
      </form>
    </div>
  );
}
