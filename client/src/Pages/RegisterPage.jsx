import React, { useState } from 'react'
import { User, LockKeyhole, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const RegisterPage = () => {

    const url = import.meta.env.VITE_BACKEND_URL
    const [userData, setUserData] = useState({
        user: '',
        pass: '',
        email: ''
    })
    const handleChange = (e) => {
        const name = e.target.name 
        const value = e.target.value 
        setUserData((prev) => ({...prev, [name]:value}))
    }
    const handleClick = async (e) => {
        e.preventDefault()
        
    }

    const navigate = useNavigate()


  return (
    <div className="w-screen h-screen flex items-center justify-center text-black">
      <div className="p-12 bg-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] rounded-xl">
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl text-center mb-4 font-bold">Signup</h2>

          <div className="flex flex-col gap-5">
            <div className="flex items-center border border-black rounded-full px-5 py-2 bg-white/5">
              <input
                type="text"
                name="user"
                value={userData.user}
                onChange={handleChange}
                placeholder="Enter username"
                required
                className="bg-transparent outline-none flex-1 text-black"
              />
              <User />
            </div>

            <div className="flex items-center border border-black rounded-full px-5 py-2 bg-white/5">
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                placeholder="Enter email"
                required
                className="bg-transparent outline-none flex-1 text-black"
              />
              <Mail />
            </div>

            <div className="flex items-center border border-black rounded-full px-5 py-2 bg-white/5">
              <input
                type="password"
                name="pass"
                value={userData.pass}
                onChange={handleChange}
                placeholder="Enter password"
                required
                className="bg-transparent outline-none flex-1 text-black "
              />
              <LockKeyhole />
            </div>
          </div>

          <button
            onClick={handleClick}
            className="w-full bg-black text-white uppercase font-semibold py-2 rounded-full border border-black hover:scale-105 hover:cursor-pointer hover:shadow-lg transition-all duration-300"
          >
            Submit
          </button>
          <p className='text-center text-[12px]'>Already have an account? <span className='text-blue-700 underline hover:cursor-pointer' onClick={()=>navigate('/login')}>Login</span></p>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage