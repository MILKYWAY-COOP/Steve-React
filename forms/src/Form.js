import React from 'react'

export default function Form() {
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')

    function handleChangeFName(event) { 
        setFirstName(event.target.value);
    }

    function handleChangeLName(event) {
      setLastName(event.target.value);
    }

    console.log(firstName, lastName);
    return (
      <form>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleChangeFName}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleChangeLName}
        />
      </form>
    );
}