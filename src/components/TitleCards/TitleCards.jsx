import React from 'react'
import './TitleCards.css'
import card_data from '../../Datas/Cards'

const TitleCards = () => {
  return (
    <div className='title-cards'>
      <h2>Popular on Netflix</h2>
      <div className="card-list">
        {card_data.map((card, index) =>{
          return (
            <div className="card" key={index}>
              <img src={card.image} alt="" />
              <p>{card.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TitleCards