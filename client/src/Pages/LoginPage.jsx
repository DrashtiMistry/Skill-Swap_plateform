// import React, { useState } from 'react'
// import { User, LockKeyhole } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const LoginPage = () => {

//         const [userData, setUserData] = useState({
//             email: '',
//             pass: ''
//         })
//         const handleChange = (e) => {
//             const name = e.target.name 
//             const value = e.target.value 
//             setUserData((prev) => ({...prev, [name]:value}))
//         }
//         const navigate = useNavigate()

//    return (
//     <div className="w-screen h-screen flex items-center justify-center text-black">
//       <div className="p-12 bg-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] rounded-xl">
//         <div className="flex flex-col gap-5">
//           <h2 className="text-3xl text-center mb-4 font-bold">Login</h2>

//           <div className="flex flex-col gap-5">
//             <div className="flex items-center border border-black rounded-full px-5 py-2 bg-white/5">
//               <input
//                 type="email"
//                 name="email"
//                 value={userData.email}
//                 onChange={handleChange}
//                 placeholder="Enter email"
//                 required
//                 className="bg-transparent outline-none flex-1 text-black"
//               />
//               <User />
//             </div>

//             <div className="flex items-center border border-black rounded-full px-5 py-2 bg-white/5">
//               <input
//                 type="password"
//                 name="pass"
//                 value={userData.pass}
//                 onChange={handleChange}
//                 placeholder="Enter password"
//                 required
//                 className="bg-transparent outline-none flex-1 text-black "
//               />
//               <LockKeyhole />
//             </div>
//           </div>

//           <button
            
//             className="w-full bg-black text-white uppercase font-semibold py-2 rounded-full border border-black hover:scale-105 hover:cursor-pointer hover:shadow-lg transition-all duration-300"
//           >
//             Submit
//           </button>
//            <p className='text-center text-[12px]'>Don't have an account? <span className='text-blue-700 underline hover:cursor-pointer' onClick={()=>navigate('/signup')}>Signup</span></p>
//         </div>
//       </div>
//     </div>
//   );

// }

// export default LoginPage



import React, { useState } from "react";
import { User, LockKeyhole } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [userData, setUserData] = useState({ email: "", pass: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userData.email, password: userData.pass }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.user._id);
        localStorage.setItem("username", data.user.name);
        localStorage.setItem("profilePhotoURL", data.user.profilePhotoURL || "");

        alert("Login successful!");
        navigate("/dashboard");
      } else {
        alert(data.message || "Login failed.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center text-black">
      <div className="p-12 bg-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] rounded-xl">
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl text-center mb-4 font-bold">Login</h2>
          <div className="flex flex-col gap-5">
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
              <User />
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
            onClick={handleLogin}
            className="w-full bg-black text-white uppercase font-semibold py-2 rounded-full border border-black hover:scale-105 hover:cursor-pointer hover:shadow-lg transition-all duration-300"
          >
            Submit
          </button>
          <p className="text-center text-[12px]">
            Don't have an account?{" "}
            <span
              className="text-blue-700 underline hover:cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Signup
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
