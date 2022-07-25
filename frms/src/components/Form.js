import React from 'react';

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    comments: '',
    isFriendly: true,
    employment: ''
  });

  console.log(formData.employment);

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

  //check whether email is valid
  const { email } = formData;

  function validateEmail(email) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      alert('Please enter a valid email address');
      return false;
    }
  }

  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
      <button type="submit" onClick={() => validateEmail(email)}>
        Submit
      </button>

      {/* add a text area to the form */}
      <textarea
        placeholder="Enter your comments here"
        onChange={handleChange}
        value={formData.comments}
        name="comments"
      />

      {/* Add a check box */}
      <input
        type="checkbox"
        name="isFriendly"
        id="isFriendly"
        checked={formData.isFriendly}
        onClick={handleChange}
      />
      <label htmlFor="isFriendly">Check me out</label>

      {/* Add a radio button */}
      <fieldset>
        <legend>Current employment status</legend>

        <input
          type="radio"
          id="unemployed"
          name="employment"
          value="unemployed"
          onChange={handleChange}
          checked={formData.employment === 'unemployed'}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />

        <input
          type="radio"
          id="part-time"
          name="employment"
          value="part-time"
          onChange={handleChange}
          checked={formData.employment === 'part-time'}
        />
        <label htmlFor="part-time">Part-time</label>
        <br />

        <input
          type="radio"
          id="full-time"
          name="employment"
          value="full-time"
          onChange={handleChange}
          checked={formData.employment === 'full-time'}
        />
        <label htmlFor="full-time">Full-time</label>
        <br />
      </fieldset>
    </form>
  );
}
