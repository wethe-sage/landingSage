import logohero from './Asset/logohero.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
 

  return (
    <div className=''>
      <div className='flex h-[70px] shadow-2xl justify-between items-center bg-slate-200'>
        <div>
          <Link to='/'>
          <img src={logohero} alt='logo' className='h-[100px]'></img>
          </Link>
        </div>
        
        <div className='  '>
          <ul 
            className='flex gap-3 p-[10px] justify-center align-baseline'>
            <li>
              <Link to='/about' className='text-lg text-[#164154] font-semibold ' >
                About Us
              </Link>
            </li>
            <li>
              <Link to='/contact' className='text-lg text-[#164154] font-semibold' >
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
