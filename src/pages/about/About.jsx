import React from 'react';
import Info from '../../components/Info';
import Stats from '../../components/Stats';
import { FaDownload } from 'react-icons/fa';


const about = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">
          About<span>Me</span>

        </h2>
        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle">
              Personal Infos
            </h3>
            <div className='stats grid'>
              <Stats/> 
            </div>
            <ul className="info__grid-list">
              <Info />


            </ul>
            
          </div>
        </div>
      </section>
    </main>
  )
}

export default about