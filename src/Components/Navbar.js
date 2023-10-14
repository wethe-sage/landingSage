import logohero from './Asset/logohero.png';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga4';

const Navbar = () => {
 
  const ga = () => {
    ReactGA.event({
      category: 'Button',
      action: 'Click',
      label: 'About Us',
    });
  }

  return (
    <div className=''>
      <div className='flex h-[70px] w-full md:h-[80px] shadow-2xl justify-between items-center bg-slate-200'>
        <div>
          <Link to='/'>
            <img src={logohero} alt='logo' className='h-[100px] md:h-[120px]'></img>
          </Link>
        </div>
        
        <div className=''>
          <ul className='flex gap-3 p-[10px] md:p-[20px] justify-center align-baseline'>
            <li>
              <Link to='/about' onClick={ga} className='text-lg md:text-xl text-[#164154] font-semibold'>
                About Us
              </Link>
            </li>
            <li>
              <Link to='/contact' className='text-lg md:text-xl text-[#164154] font-semibold'>
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
