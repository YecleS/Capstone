import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Login.css';
import { Link } from 'react-router-dom';
import Logo from '../Assets/logo.png';
import LoginImg from '../Assets/loginImg.png';

function Login() {

const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'owner') {
      navigate('/OwnerMenu');
    } else if(username === 'staff') {
        navigate('/StaffMenu');
       }
  };

  return (
    <div className='login'>
        <div className='login__wrapper'>

            <div className='login__form-wrapper'>
                <div className='login__logo-wrapper'>
                    <img src={Logo} className='login__logo'></img>
                    <p className='login__text'>Kamp BJ <br />Aquatics</p>
                </div>
                <h2 className='login__title'>Welcome</h2>
                <input type='text' 
                    id="username" 
                    placeholder='Username' 
                    className='login__input-fields'
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                ></input>     
                <input 
                    type='password' 
                    placeholder='Password' 
                    className='login__input-fields' 
                    alue={password} 
                    onChange={(e) => setPassword(e.target.value)}               
                ></input>
                <button className='login__login-button' onClick={handleLogin}>Login</button>     
            </div>

            <div className='login__img-wrapper'>
                <img src={LoginImg} className='login__login-img'></img>
            </div>

        </div>
        
    </div>
  )
}

export default Login