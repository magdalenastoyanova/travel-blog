import React, {useState} from 'react';
import { authMethods } from './authMethods'


const AuthProvider = (props) => {
  const [inputs, setInputs] = useState({email: '', password: ''})
  const [errors, setErrors] = useState([])
  const [token, setToken] = useState(null)

  const handleSignup = () => {
    // middle man between firebase and signup 
    console.log('handleSignup')
    // calling signup from firebase server
    return authMethods.signup()
  }

    return (
      <firebaseAuth.Provider
      value={{
        handleSignup,
        inputs,
        setInputs,
      }}>
        {props.children}
  
      </firebaseAuth.Provider>
    );
  };

export default AuthProvider;


export const firebaseAuth = React.createContext()