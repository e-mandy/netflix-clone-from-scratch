import { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import profile from '../../assets/profile_icon.png'
import { Search, Bell, User, ChevronUp  } from 'lucide-react'

const Navbar = () => {

    const navbar = useRef()

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 75){
                navbar.current.classList.add('dark-navbar')
            }else{
                navbar.current.classList.remove('dark-navbar')
            }
        })
    }, [])
    
    return (
        <div ref={navbar} className='navbar'>
            <div className="navbar-left">
                <img src={logo} />
                <ul>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browser by Languages</li>
                </ul>
            </div>
            <div className="navbar-right">
                <Search size={20} className='search' />
                <p>Children</p>
                <Bell />
                <div className='navbar_profile'>
                    <img src={profile} className='profile' />
                    <ChevronUp />
                    <div className="dropdown">
                        <p>Sign out of Netflix</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar