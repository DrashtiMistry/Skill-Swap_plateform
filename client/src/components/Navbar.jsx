import React, {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useUserContext } from '../context/UserContext'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import user from '../assets/user.avif'
import { ChevronDown, ChevronUp, User, LogOut } from 'lucide-react';


const Navbar = () => {

    const {userData, setUserData} = useUserContext() 
    const [isOpen, setIsOpen] = useState(false);
    const navigate =  useNavigate()
    const handleLogOut = () => {
        setUserData({})
        navigate('/')
    }
    
  return (
    <div className='flex flex-row items-center justify-between px-9 py-4 border-b fixed w-full top-0 left-0 bg-black/30 backdrop-blur-sm z-10'>
        <h1>AppName</h1>

        {
            Object.entries(userData).length > 0 ?
                <DropdownMenu onOpenChange={setIsOpen}>
                    <DropdownMenuTrigger asChild>
                        <div className="flex flex-row items-center gap-2">
                            <img 
                                src={user}
                                alt=""
                                height={100}
                                width={100}
                                className='relative !m-0 h-9 w-9 rounded-full border-2   border-gray-400 object-cover object-top !p-0'
                            />
                            {isOpen ? <ChevronUp /> : <ChevronDown />}
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent sideOffset={8} className="z-50">
                        <DropdownMenuItem onSelect={()=>setIsOpen(false)}>
                            <NavLink to={'/profile'} className="flex flex-row items-center gap-x-2">
                                <User />
                                <p>Profile</p>
                            </NavLink>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <div onClick={handleLogOut} className="flex flex-row items-center gap-x-2">
                                <LogOut />
                                <p>Log Out</p>
                            </div>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            :
            (
                 <div className="flex flex-row gap-x-4">
                    <div className="relative group cursor-pointer pb-0.5">
                        <NavLink to={'/login'}>LogIn</NavLink>
                        <span className='absolute bottom-0 left-0 h-[2px] origin-center bg-white w-full scale-x-0 group-hover:scale-x-100 duration-300'></span>
                    </div>
                    <div className="relative group cursor-pointer pb-0.5">
                        <NavLink to={'/signup'}>SignUp</NavLink>
                        <span className='absolute bottom-0 left-0 h-[2px] origin-center bg-white w-full scale-x-0 group-hover:scale-x-100 duration-300'></span>
                    </div>
                </div>
            )
    }
    </div>
  )
}

export default Navbar