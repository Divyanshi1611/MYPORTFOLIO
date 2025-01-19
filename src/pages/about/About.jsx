import React from 'react';
import Info from '../../components/Info';
import Stats from '../../components/Stats';
import { FaDownload } from 'react-icons/fa';
import "./about.css";
import {resume} from '../../data';
import Skills from '../../components/Skills';
import ResumeItem from '../../components/ResumeItem';


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
      <div className="seperator"></div>
      <section className='skills'>
        <h3 className="section__subtitle subtitle__center">
          My Skills
        </h3>
        <div className="skills__container grid"></div>
        <Skills />
      </section>
      <section className="resume">
        <h3 className="section__subtitle subtitle__center">
          Expirience and Education
        </h3>
        <div className="resume__container grid">
          <div className="resume__data">
            {resume.map((val)=>{
              if(val.category==="expirience"){
                return <ResumeItem key={val.id} {...val}/>



              }
            })}

          </div>

        </div>
      </section>
    </main>
  )
}

export default about;