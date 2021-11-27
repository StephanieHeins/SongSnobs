// see SignupForm.js for comments
import React, { useState } from 'react';
//import { Form, Button, Alert } from 'react-bootstrap';
import 'materialize-css/dist/css/materialize.min.css'

import { LOGIN_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';


// import { loginUser } from '../utils/API';
import Auth from '../utils/auth';

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  //const [showAlert, setShowAlert] = useState(false);

  const [loginUser, {error, data}] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const response = await loginUser({ variables: {...userFormData}});

      // if (!response.ok) {
      //   throw new Error('something went wrong!');
      // }

      // const { token, user } = await response.json();
      // console.log(user);
      Auth.login(response.user.token);
    } catch (err) {
      console.error(err);
      //setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
    <div className="row" style={{marginTop: "50px", backgroundColor:"lightGreen"}}>
      <form className="col s6"  noValidate validated={validated} onSubmit={handleFormSubmit}>    
      <div className="row" >    
        <div className="input-field col s6" >
        <i className="material-icons prefix">person</i>
          <input
            type='text'
            //placeholder='Your email'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <label htmlFor='email'>Email</label>
        </div>
        </div>
        
      
      <div className="row">  
        <div className="input-field col s6">
        <i className="material-icons prefix">vpn_key</i>
          
          <input
            type='text'
            //placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <label htmlFor='password'>Password</label>
        </div>
        </div>
        <button class="btn waves-effect waves-light" 
        type="submit" 
        variant='success'
        disabled={!(userFormData.email && userFormData.password)}
        name="action">
        Submit
        <i class="material-icons right">send</i>
        </button>
      </form>
      </div>
      
    </>
  );
};

export default LoginForm;
