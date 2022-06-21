import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [showProfile, setShowProfile] = useState(false);
    return (
        <div className='login'>
            <input
                type="text"
                placeholder='username..'
                onChange={e => setUsername(e.target.value)}
            />
            <input type="text" placeholder='Password...' />
            <button onClick={() => setShowProfile(true)}>Login</button>
            {showProfile && <>{username} </>}
        </div>
    );
}

export default Login;