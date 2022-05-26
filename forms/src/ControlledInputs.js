import React from 'react';

export default function ControlledInputs() {
  const [formInput, setFormInput] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    comments: ''
  });

  console.log(formInput.comments);

  function handleChange(event) {
    setFormInput((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      };
    });
  }

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          value={formInput.firstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
          value={formInput.lastName}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={formInput.email}
        />
      </form>
      <textarea
        name="comments"
        value={formInput.comments}
        onChange={handleChange}
        placeholder="Comments"
      />
    </>
  );
}
