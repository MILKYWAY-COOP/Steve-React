import React from 'react';

export default function Form() {
  const [formInput, setFormInput] = React.useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  console.log(formInput.firstName, formInput.lastName, formInput.Email);

  function handleChange(event) {
    setFormInput((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      };
    });
  }

  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
      />
      <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
      />
    </form>
  );
}
