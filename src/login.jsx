import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { GoogleContext } from './Context/GoogleContext';
import { useJwt } from 'react-jwt';
import { toast } from 'react-hot-toast';
import { Icon } from '@iconify/react';
import { useForm } from "react-hook-form";
const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit,formState: { errors, isSubmitting } } = useForm();
  const { setGoogleCrediential, googleCredential } = useContext(GoogleContext);

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      toast.success('Usuário logado com sucesso!');
      setGoogleCrediential(tokenResponse.credential);
      navigate('/');
    },
    onError: (error) => {
      toast.error('Houve um erro ao tentar logar');
      console.log(error)
    },
  });

  const loginForm = (data) => {
    console.log(data)

  }

  return (
    <main className="flex items-center justify-center main_container ">
      <div className="mt-44">
        <form action="" onSubmit={handleSubmit(loginForm)} className="border  w-fit p-4 max-w-[500px]"> 
          <button className='border p-3 flex items-center text-gray-500 rounded-md w-full' onClick={login}><Icon icon="devicon:google" fontSize={30} className="mr-2"/>Faça o login com google</button> 
          <div className="divider h-[1px] text-gray-400">ou</div>
          <h2 className="text-left  text-gray-600">Fazer Login</h2>
          <div className="space-y-2">
            <input
             autoComplete="new-off"
             {...register("email",{ required: true })}
              type="text"
          
              className="border rounded-md p-2 w-full"
              placeholder="Digite seu E-mail"
            />
               {errors.email && <span className='text-red-600'>O campo email não pode estar vazio </span>}
            <input
            {...register("password",{ required: true })}
            autoComplete="new-off"
              type="password"
        
              className="border rounded-md p-2 w-full"
              placeholder="Digite a senha"
            />
               {errors.password && <span className='text-red-600'>O campo Senha não pode estar vazio</span>}
            <button
              type="submit"
              className="p-3 bg-brand-purple-600 w-full text-white rounded-md flex justify-center items-center"
            >
              {!isSubmitting ? 'Fazer Login' :  <span className="loading loading-spinner loading-xs absolute left-3 top-[12px]"></span>}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
