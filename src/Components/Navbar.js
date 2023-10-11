import logo from './Asset/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
 

  return (
    <div>
      <div className='flex justify-between items-center'>
        <div>
          <Link to='/'>
          <img src={logo} alt='logo' className='h-[100px]'></img>
          </Link>
        </div>
        
        <div className='  '>
          <ul 
            className='flex gap-3 p-[5px] justify-center align-baseline'>
            <li>
              <Link to='/about' className='text-lg ' >
                About Us
              </Link>
            </li>
            <li>
              <Link to='/contact' className='text-lg' >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
