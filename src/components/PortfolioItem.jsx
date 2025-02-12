import React from 'react'
const Close = new URL("../assets/close.svg", import.meta.url).href;
const PortfolioItem = ({img,title,details}) => {
  return (
    <div className="portfolio__item">
        <img src={img} alt="" className="portfolio__img" />
        <div className="portfolio__hover">
            <h3 className="portfolio__title">{title} </h3>

        </div>
        <div className="portfolio__modal">
            <div className="portfolio__modal-content">
                <img src={Close} alt="" className="modal__close" />
                <h3 className="modal__title">{title}</h3>
                <ul className="modal__list grid">
                  {details.map}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default PortfolioItem