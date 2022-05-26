import React from 'react';

export default function ControlledInputs() {
  const [formInput, setFormInput] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    comments: '',
    isFriendly: false,
    employment: ''
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormInput((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value
      };
    });
    }
    
    console.log(formInput.employment)

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
      <input
        type="checkbox"
        id="isFriendly"
        checked={formInput.isFriendly}
        onChange={handleChange}
        name="isFriendly"
      />
      <label htmlFor="isFriendly">Are you friendly?</label>
      <br />
      <br />

      <fieldset>
        <legend>Current employment status</legend>

        <input
          type="radio"
          id="unemployed"
          name="employment"
          value="unemployed"
          checked={formInput.employment === 'unemployed'}
          onChange={handleChange}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />

        <input
          type="radio"
          id="part-time"
          name="employment"
          value="part-time"
          checked={formInput.employment === 'part-time'}
          onChange={handleChange}
        />
        <label htmlFor="Part-time">Part-time</label>
        <br />

        <input
          type="radio"
          id="full-time"
          name="employment"
          value="full-time"
          checked={formInput.employment === 'full-time'}
          onChange={handleChange}
        />
        <label htmlFor="fulltime">Full-time</label>
        <br />
      </fieldset>
    </>
  );
}
