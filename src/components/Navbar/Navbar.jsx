import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import profile from '../../assets/profile_icon.png'
import { Search, Bell, User, ChevronUp  } from 'lucide-react'

const Navbar = () => {
    return (
        <div className='navbar w-full flex justify-between fixed text-[#e5e5e5]'>
            <div className="navbar-left flex items-center">
                <img src={logo} className='w-30' />
                <ul className='flex list-none gap-5'>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browser by Languages</li>
                </ul>
            </div>
            <div className="navbar-right flex gap-4 items-center">
                <Search size={20} className='cursor-pointer' />
                <p>Children</p>
                <Bell />
                <div className='navbar_profile flex items-center gap-2 cursor-pointer relative'>
                    <img src={profile} className='rounded-lg w-10' />
                    <ChevronUp />
                    <div className="dropdown absolute top-full right-0 underline w-max hidden">
                        <p className='cursor-pointer'>Sign out of Netflix</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar