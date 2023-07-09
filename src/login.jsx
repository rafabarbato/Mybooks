import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
  return (
    <main className="flex items-center justify-center main_container ">
      <div className="mt-44">
        <GoogleLogin
          clientId="150494240816-64hjjooke2pes7i15icv5e37n3pd0gl9.apps.googleusercontent.com"
          onSuccess={(credentialResponse) => {
            navigate('/')
            console.log(credentialResponse);
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
