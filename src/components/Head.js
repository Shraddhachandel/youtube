import React from 'react'
import user_logo from "../images/user.png";
import youtube_logo from "../images/Youtube.jpg";
import hemburger_logo from "../images/hamburger-menu.jpg";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';



const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img
        onClick={()=> toggleMenuHandler()}
        className = 'h-16 cursor-pointer' src={hemburger_logo}/>
        <a href='/'>
        <img className = 'h-16 mx-2' src={youtube_logo}/>
        </a>
      </div>
              <div className='col-span-10 px-10'>
          <input className='border-2 border-gray-400 w-1/2 p-2 rounded-l-full' type="text" placeholder="Search" />
          <button className='border-2 border-gray-400 p-5 py-2 rounded-r-full bg-gray-100'>🔍</button>
        </div>
            <div>
        <img className = 'h-16 col-span-1' src={user_logo}/>
      </div>
    </div>
  )
}

export default Head