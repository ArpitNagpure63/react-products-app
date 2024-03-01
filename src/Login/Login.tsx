import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (username && password) {
            const response = await fetch('https://dummyjson.com/auth/login',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password })
                });
            const data = await response.json();
            if (data.token) {
                sessionStorage.setItem('token', data.token);
                navigate('products');
            } else {
                sessionStorage.clear();
            }
        }
    }

    return <div className='login-container'>
        <div>Welcome to login page</div>
        <input
            type="text"
            placeholder="Enter username ID"
            className='input-field'
            onChange={(e) => setUsername(e.target.value)}
            value={username} />
        <input
            type="password"
            placeholder="Enter Password"
            className='input-field'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
        />
        <button className='login-cta' onClick={handleSubmit}>Log In</button>
    </div>
};

export default Login;