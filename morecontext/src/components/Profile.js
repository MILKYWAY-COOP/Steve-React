import React from 'react';
import { useContext } from 'react';
import { LoginContext } from '../Contexts/LoginContext';

function Profile() {
  const { username } = useContext(LoginContext);
  return (
    <div>
      <h1>Profile</h1>
      <h3>UserName: {username}</h3>
    </div>
  );
}

export default Profile;
