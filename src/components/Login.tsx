import * as React from 'react';

import { LoginObject } from '@/interfaces/LoginObject';

export interface LoginFunction{
  handleLogin: (objetoLogin:LoginObject) => void
}

export default function Login({handleLogin}:LoginFunction) {

  const [loginObject, setLoginObject] = React.useState<LoginObject>({
    username:'',
    password:''
  });

  const handleSubmitLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    handleLogin(loginObject)
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setLoginObject({
      ...loginObject,
      [e.target.name]:e.target.value
    })
  }

  const {username, password } = loginObject;

  return(
    <div className="grid h-screen place-items-center">
      <div className='p-4 w-96'>
        <div className="text-center p-4">
          <h2>Todo App</h2>
        </div>
        <form action="" onSubmit={(e) => handleSubmitLogin(e) }>
          <input type="text" className=' w-full mb-2' value={username}  onChange={(e)=>handleChange(e)} placeholder="Username" name="username"/>
          <input type="password" className=' w-full mb-2' value={password}  onChange={(e)=>handleChange(e)} placeholder="Password" name="password"/>
          <input type="submit" value="Enviar" className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' />
        </form>
      </div>
    </div>
  )
}