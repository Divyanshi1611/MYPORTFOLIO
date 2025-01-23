import React from 'react'
import Close from '../assets/close.svg'

const PortfolioItem = ({img,title,details}) => {
  return (
    <div className="portfolio__item">
        <img src={img} alt="" className="portfolio__img" />
        <div className="portfolio__hover">
            <h3 className="portfolio__title">{title} </h3>

        </div>
        <div className="portfolio__modal">
            <div className="portfolio__modal-content">
                <img src={close} alt="" className="modal__close" />
            </div>
        </div>
    </div>
  )
}

export default PortfolioItem