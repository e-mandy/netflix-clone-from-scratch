import React from 'react'
import './Home.css'
import { Play, Info } from 'lucide-react'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.webp'
import hero_title from '../../assets/hero_title.webp'
import TitleCards from '../../components/TitleCards/TitleCards'

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <div className='hero relative'>
                <img src={hero_banner} className='banner_img w-full' />
                <div className='hero-caption absolute w-full bottom-0'>
                    <img className="caption-img" src={hero_title} alt="" />
                    <p>La première série Netflix de Tyler Perry retrace les destins liés d'une jeune femme forcée à travailler dans l'industrie du sexe et d'une entrepreneure cruelle et calculatrice.</p>
                    <div className="hero_btns">
                        <button className="inline-flex p-10 gap-[10px] items-center border-0 outline-0 text-[15px] rounded cursor-pointer bg-white text-black">
                            <Play />
                            Play
                        </button>
                        <button className="dark-btn inline-flex p-10 gap-[10px] items-center border-0 outline-0 text-[15px] rounded cursor-pointer bg-white text-black">
                            <Info />
                            More Infos
                        </button>
                    </div>
                    <TitleCards />
                </div>
            </div>
        </div>
    )
}

export default Home