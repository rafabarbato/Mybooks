import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { GoogleContext} from './Context/GoogleContext'
import { useJwt } from 'react-jwt';
const Login = () => {
  const navigate = useNavigate()
  const { setGoogleCrediential, googleCredential } = useContext(GoogleContext)
  const { decodedToken, isExpired } = useJwt(googleCredential);
  return (
    <main className="flex items-center justify-center main_container ">
      <div className="mt-44">
        <GoogleLogin
          auto_select
         
          onSuccess={(credentialResponse) => {
            setGoogleCrediential(credentialResponse.credential)
            console.log(decodedToken)
            navigate('/')
           
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </div>
    </main>
  );
};

export default Login;
