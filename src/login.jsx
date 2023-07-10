import React, { useState } from 'react';
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
  const { register, handleSubmit,formState: { errors } } = useForm();
  const {  } = useContext(GoogleContext);
  const [loading ,setLoading ] = useState(false)
  const [ refresh, setRefresh] = useState(false)
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
    try{
      setRefresh(state => !state)
      toast.success('Usuário logado com sucesso!');
      const userInfo = await fetch('https://www.googleapis.com/oauth2/v3/userinfo',{
        headers: { Authorization : `Bearer ${tokenResponse.access_token}`}
      })
      const dataInfo = await userInfo.json()
      console.log(dataInfo)
      localStorage.setItem('userInfo',JSON.stringify(dataInfo))
    }catch(error){
      console.log(error)
    }

    
      navigate('/');
    },
    onError: (error) => {
      toast.error('Houve um erro ao tentar logar');
      console.log(error)
    },
  });

  const loginForm =  (data) => {
    setLoading(true)
   setTimeout(()=>{
    setLoading(false)
      toast.success('Usuário logado com sucesso!');
      navigate('/')
    },3000)

  }

  return (
    <main className="flex items-center justify-center main_container ">
      <div className="mt-44">
        <form action="" onSubmit={handleSubmit(loginForm)} className="border  w-fit p-4 max-w-[500px]"> 
          <button type='button' className='border p-3 flex items-center text-gray-500 rounded-md w-full' onClick={login}><Icon icon="devicon:google" fontSize={30} className="mr-2"/>Faça o login com google</button> 
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
              {!loading ? 'Fazer Login' :  <Icon icon="eos-icons:loading" fontSize={25}/>}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
