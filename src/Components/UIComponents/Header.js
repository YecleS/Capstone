import React, {useState} from 'react';
import '../Styles/Header.css';
import MenuIcon from '../Assets/menuIcon.png';
import Logo from '../Assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, isSetNotificationDropdownOpen] = useState(false);

  const openOwnerDropdownMenu = () => {
    setIsAccountDropdownOpen(true);
    isSetNotificationDropdownOpen(false);
  };

  const closeOwnerDropdownMenu = () => {
    setIsAccountDropdownOpen(false);
  };

  const openNotificationDropdownMenu = () => {
    isSetNotificationDropdownOpen(true);
    setIsAccountDropdownOpen(false);
  };

  const closeNotificationDropdownMenu = () => {
    isSetNotificationDropdownOpen(false);
  };

  const logout = () => {
    const isConfirmed = window.confirm('Are you sure you want to logout?');
    if (isConfirmed) {
      console.log("User logged out");
      navigate('/'); 
    }
  };

  return (
    <div className='header__wrapper'>
      <div className='header__logo-wrapper'>
        <img src={MenuIcon} className='header__hambuger-icon'></img>
        <img src={Logo} className='header__logo'></img>
        <p className='header__logo-text'>Kamp BJ Aquatics</p>
      </div>

      <div className='header__controls-wrapper'>
        <div className='header__notification-wrapper'>
            <FontAwesomeIcon icon={faBell} className='header__notification-icon' onClick={isNotificationDropdownOpen ? closeNotificationDropdownMenu : openNotificationDropdownMenu}/>
              {isNotificationDropdownOpen && (
                <div className='header__notification-dropdown'>
                <p>Notif dropdown</p>
                </div>
              )}    
          </div>

          <div className='header__account-wrapper' onClick={isAccountDropdownOpen ? closeOwnerDropdownMenu : openOwnerDropdownMenu}>
            <div className='header__account-icon-wrapper'>
              <FontAwesomeIcon icon={faUserAlt} className='header__account-name-icon'/>
            </div>
            <p className='header__name'>Owner <FontAwesomeIcon icon={faCaretDown}/> </p>
          </div>

          {isAccountDropdownOpen && (
            <div className='header__account-dropdown'>
                <li className='header__account-dropdown-link' onClick={logout}>Logout</li>
            </div>
          )}

      </div>

    </div>
  )
}

export default Header