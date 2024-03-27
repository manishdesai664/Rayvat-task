import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { signInUser } from '../redux/authSlice';

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // const dispatch = useDispatch();

    const handleLogin = (e) => {
        // dispatch(signInUser({username,password}));
        
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              
              username: `${username}`,
              password: `${password}`,
            })
          })
          .then(res => res.json())
          .then(console.log);

    }
  return (

        <>
             <div className="flex flex-column align-items-center ">
                <h3>Login</h3>
                <label htmlFor="">Username : </label>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /> <br/>
                <label htmlFor="">Password : </label>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />  <br/>
                <button onClick={handleLogin} className="mt-3" >Login</button>
            </div>
        </>
    )
}

export default SignIn;