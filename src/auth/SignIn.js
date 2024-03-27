import React, { useState } from 'react';
import axios from 'axios';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await axios.post('https://dummyjson.com/auth/SignIn', { username, password });
      const token = response.data.token;
      console.log('SignIn successful. Token:', token);
      // Handle storing token
    } catch (error) {
      console.error('SignIn failed:', error);
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>SignIn</h2>
      {error && <div>{error}</div>}
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleSignIn}>SignIn</button>
    </div>
  );
};

export default SignIn;