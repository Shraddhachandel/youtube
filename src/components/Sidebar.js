import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  if(!isMenuOpen) return null;

  return (
    <div className='p-5 shadow-lg w-48'>
      <ul>
        <Link to="/">
        <li className='font-bold'>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Game</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Game</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar