import type { NextPage } from 'next';
import { useState } from 'react';
import { useRouter } from "next/router";
import axios from 'axios';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string,
  exampleRequired: string,
};

const Login: NextPage = () => {
  const router = useRouter();
  const [uname, setuname] = useState('');
  const [pwd, setpwd] = useState('');

  // API for  Login function
  const Login = async () => {
  
    try {
      const response = await axios.post('http://localhost:3000/api/loginapi', { username: uname, password: pwd });
      localStorage.setItem('accessToken', response.data);
   
      const usrcnt = await response.data;
      console.log({ usrcnt });
    
      if (usrcnt > 0) {
        console.log("sucessfully loged innnnnnnnnnnn")
        router.push('/list');
      }
    }
    catch ({ error }) {
      console.log({ error })
    }
  };


  return (
    <>

      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login</h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" >

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  User Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    onChange={(e: any) => setuname(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    type="password"
                    onChange={(e: any) => setpwd(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <button onClick={Login}
                  type="button"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </form>


          </div>
        </div>
      </div>

    </>
  )
}

export default Login
