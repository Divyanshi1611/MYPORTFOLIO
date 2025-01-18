import React from 'react';
import Profile from '../../assets/assets/home.png';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBeer } from 'react-icons/fa';
import "./home.css";
const Home = () => {
  return(
     <section className="home section grid">
      <img src={Profile} alt='' className='home__img'/>
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Divyanshi Sharma</span>
          </h1>
          <p className="home__description">
          I'm Divyanshi Sharma, a passionate and driven individual currently preparing for placements while actively contributing to the tech and competitive programming community. 
          As a proud member of the Competitive Programming (CP) team at Google Developer Group (GDG) and an organizer of events like HACK SPRINT, I enjoy fostering innovation and collaboration.
          </p>
          <Link to='/about' className='button'>
             More About Me<span className="button__icon"><FaArrowRight/></span>
          </Link>
        </div>
         
      </div>
      
     </section>
  )
}

export default Home;
