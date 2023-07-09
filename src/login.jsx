import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { GoogleContext} from './Context/GoogleContext'
import { useJwt } from 'react-jwt';
const Login = () => {
  const navigate = useNavigate()
  const { setGoogleCrediential, googleCredential } = useContext(GoogleContext)

  return (
    <main className="flex items-center justify-center main_container ">
      <div className="mt-44">
        <GoogleLogin
          auto_select
         
          onSuccess={(credentialResponse) => {
            navigate('/')
            console.log(credentialResponse)
            setGoogleCrediential(useJwt(credentialResponse.credential).decodedToken)
           
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
