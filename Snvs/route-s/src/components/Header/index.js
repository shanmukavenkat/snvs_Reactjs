import './index.css'
import { Link } from 'react-router-dom';
const Header = () => {
    return(
<>
  <div className='logo-name'>
   <div className='logo-items'>
    <img
      src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      alt="wave"
      className='logo'
    />
   <h1 className='text'>Wave</h1>
   </div>

   <div>
    <ul className='menu-items'>
        <li>
          <Link to="/">Home</Link>
          </li>
        <li>
          <Link to="/about">About </Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
         </li>
    </ul>
   </div>
  </div>
</>
)}

export default Header;
