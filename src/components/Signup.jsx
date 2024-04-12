import React from 'react';
import { useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Signup({setToken}) {
    const [user, setUser] = useState('');
    const [password,setPassword] = useState('');
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(user);
 
      
      try { 
        const response = await axios.post(`https://fakestoreapi.com/users`, {
          username: user,
          password: password
        });
        const result = response.data;
        setToken(result.token);
        console.log(result) 
        
      } catch (error) {
        console.error('could not signup', error)
      }
    }
    
    
  return (
<div className="form-container">
    <h3>Sign-up for account</h3>
    <form className='signup-form' onSubmit={handleSubmit}>
        <label htmlFor='user'>Username:</label>
        <input value={user} onChange={(e) => setUser(e.target.value)} type='text' placeholder='Username' id='user' name='user' /> <br/>
        <label htmlFor='password'>Password:</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' id='password' name='password'/> <br/>
        <button type='submit'>Sign me up!</button>
    </form>
    <Link to='/login' className="link-btn">Already have an account? Login here.</Link>
</div>  
  )
}

export default Signup;