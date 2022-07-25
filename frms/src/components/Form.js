import React from 'react';

export default function Form() {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
    });

    function handleChange(event) {
        setFormData(prevFormData => ({
            ...prevFormData,
            [event.target.name]: event.target.value,
            }));
    }

    //check whether email is valid
    const {email} = formData;

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            alert('Please enter a valid email address');
            return false;
        }
    }

    return (
        <form>
            <input type="text" placeholder="First Name" onChange={handleChange} name="firstName"value={formData.firstName}/>
            <input type="text" placeholder="Last Name" onChange={handleChange} name="lastName" value={formData.lastName}/>
            <input type="email" placeholder="Email" onChange={handleChange} name="email" value={formData.email}/>
            <button type="submit" onClick={() => validateEmail(email)}>Submit</button>
        </form>
    );
}