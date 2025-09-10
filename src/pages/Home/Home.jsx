import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.webp'
import hero_title from '../../assets/hero_title.png'

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <div className='hero relative'>
                <img src={hero_banner} className='banner_img w-full' />
                <div className='hero_caption'>
                    <img src={hero_title} alt="" />
                    <p>Un chirurgien surdoué atteint du syndrome d'Asperger rejoint un hôpital prestigieux où il se heurte à la défiance des patients et de ses collègues.</p>
                </div>
            </div>
        </div>
    )
}

export default Home