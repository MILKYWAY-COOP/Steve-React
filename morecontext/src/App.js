import './App.css';
import { useState } from 'react';
import Login from './components/Login';
import Profile from './components/Profile';
import { LoginContext } from './Contexts/LoginContext';


export default function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState('');

  return (
    <div className="App">
      <LoginContext.Provider value={{username, setUsername, setShowProfile}}>
        {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
}