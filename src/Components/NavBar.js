import React , {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../Stylesheet/Navbar.css'
import Button from './Button'

export default function Navbar() {
    const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(true);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
    return (
        <div className="navbar">
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                TRVL <i className="fab fa-typo3"/>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times':'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                        Services
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                        Products
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/' className='nav-links' >
                    {button &&<Button buttonStyle='btn--primary'>SIGN-UP</Button>}
                    </Link>
                </li>
            </ul>
            
        </div>
    )
}
