import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Cookies  from 'js-cookie';
import {    useNavigate } from 'react-router-dom';
import {toast, Toaster} from 'sonner'

export  const AuthScreen = ({signup,login}:{signup?:boolean, login?:boolean}) => {
  console.log(login);
  
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(email===''||password===''){
      toast.warning("Please enter all feilds")
      return;
    }
    
    // Handle login logic here
    const randomId=  crypto.randomUUID()
    console.log("randomId ", randomId);
    Cookies.set("NFTtoken",randomId);
    setTimeout(() => {
      navigate('/')
    }, 1000);
    toast.success("User Created!")
   
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <Toaster  richColors className=' font-cpmono-heading ' />
      {/* Logo Section */}
      <div className="mb-8 flex items-center space-x-2">
        <img src="/vite.svg" alt="" />
        <span className="text-green-400 text-2xl font-mono font-bold">SOLMEMEWARS</span>
      </div>

      {/* Login Form */}
      <div className="w-full max-w-md bg-secondary rounded-lg border border-gray-700 p-8">
        <h2 className="text-2xl font-bold text-white mb-6 font-mono">{signup?"Sign Up":"LogIn"}</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
       { signup &&   <div>
            <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">
              Username
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              placeholder="pepe_swag0033"
            />
          </div>}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              placeholder="pepe@gmail.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              placeholder="must be more than 5 character"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-green-400 focus:ring-green-400"
              />
              <label className="ml-2 text-sm text-gray-300 font-mono">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-green-400 hover:text-green-300 font-mono">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center px-4 py-2 transition-all duration-300 bg-[#8EFBC1] text-gray-900 rounded-md hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-800 font-mono"
          >
            {signup?"Sign Up":"LogIn"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </form>

        <div className="mt-6 text-center">
          <span className="text-gray-400 font-mono">{signup?"Already have an acount? ":"Don't have an acount?"}</span>
          <a href={signup?"/login":"signup"} className="text-green-400 hover:text-green-300 font-mono">
          {signup?"LogIn":"Sign Up"}
          </a>
        </div>
      </div>

      {/* Connect Wallet Option */}
      <div className="mt-6">
        <button className="px-6 py-2 bg-gray-800 border border-green-400 text-green-400 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900 font-mono flex items-center">
          Connect Wallet
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
 