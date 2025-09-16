import React from 'react'
import './Home.css'
import { Play, Info } from 'lucide-react'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.webp'
import hero_title from '../../assets/hero_title.webp'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <div className='hero'>
                <img src={hero_banner} className='banner_img' />
                <div className='hero-caption'>
                    <img className="caption-img" src={hero_title} alt="" />
                    <p>La première série Netflix de Tyler Perry retrace les destins liés d'une jeune femme forcée à travailler dans l'industrie du sexe et d'une entrepreneure cruelle et calculatrice.</p>
                    <div className="hero_btns">
                        <button>
                            <Play />
                            Play
                        </button>
                        <button className="dark-btn">
                            <Info />
                            More Infos
                        </button>
                    </div>
                    <TitleCards title="Popular on Netflix" category="popular"/>
                </div>
            </div>
            <div className="more-cards">
                <TitleCards title="Now Playing" category="now_playing" />
                <TitleCards title="Top Rated" category="top_rated" />
                <TitleCards title="Upcoming" category="upcoming" />
            </div>
            <Footer /> 
        </div>
    )
}

export default Home