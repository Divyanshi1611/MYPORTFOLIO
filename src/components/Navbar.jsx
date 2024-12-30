import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import {links} from '../data';
import './navbar.css'
function Navbar() {
  const[showMenu,setshowMenu]=useState(false);
  return (
    <nav className='nav'>
      <div className={`${showMenu ? 'nav--menu show-menu' : 'nav--menu'}`}>
        <ul className="nav--list">
          {links.map(({name,icon,path},index) => {
            return (
              <li className="nav--item" key={index}>
                <NavLink to={path} className={({isActive})=>isActive ? 'nav--link active' : 'nav--link'} 
                  onClick={()=>setshowMenu(!showMenu)}>
                  {icon}
                  <h3 className="nav--name">{name}</h3>
                </NavLink>
              </li>
            )
          })}

        </ul>
      </div>
      <div className={`${showMenu ? 'nav--toggle animate-toggle' : 'nav--menu'}`} onClick={()=>setshowMenu(!showMenu)}>
      <span></span>
      <span></span>
      <span></span>
      </div>


     
    </nav>
  );
}

export default Navbar;
