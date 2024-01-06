import { useEffect, useState } from 'react'
import user_logo from "../images/user.png";
import youtube_logo from "../images/Youtube.jpg";
import hemburger_logo from "../images/hamburger-menu.jpg";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';



  const Head = () => {
  const [searchQuery, setSaerchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    //console.log(searchQuery);

    // getSaerchSuggestion();

    const timer = setTimeout(()=> getSaerchSuggestion(), 500);

    return () => {
      clearTimeout(timer);
    }

    //if time between 2 keypress < 200 ms we decline the API call

  }, [searchQuery])

  const getSaerchSuggestion = async () => {
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);

    const json = await data.json();
    // console.log(json[1]);
    setSuggestion(json[1]);
    // console.log(suggestion)

  }

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
      <div >
          <input className='border-2 border-gray-400 w-1/2 p-2 rounded-l-full' type="text" 
          placeholder="Search" 
          value={searchQuery}
          onFocus={()=> setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
          onChange={(e) => setSaerchQuery(e.target.value)}/>
          <button className='border-2 border-gray-400 p-5 py-2 rounded-r-full bg-gray-100'>🔍</button>
      </div>
      { showSuggestion && <div className='absolute bg-white py-2 px-2 w-[27rem] rounded-lg border border-gray-100'>
        <ul>
          {suggestion && suggestion.map((s)=> <li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>🔎{s}</li>)}
        </ul>
      </div> }
      </div>

      
      <div>
        <img className = 'h-16 col-span-1' src={user_logo}/>
      </div>
    </div>
  )
}

export default Head;