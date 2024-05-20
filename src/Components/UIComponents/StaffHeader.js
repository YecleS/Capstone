import React, {useState} from 'react';
import '../Styles/StaffHeader.css';
import MenuIcon from '../Assets/menuIcon.png';
import Logo from '../Assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { StaffFileLeave } from './StaffFileLeave';

function StaffHeader() {
  const navigate = useNavigate();

  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, isSetNotificationDropdownOpen] = useState(false);
  const [isFileLeaveModalOpen, isSetFileLeaveModalOpen] = useState(false);


  const openStaffDropdownMenu = () => {
    setIsAccountDropdownOpen(true);
    isSetNotificationDropdownOpen(false);
  };

  const closeStaffDropdownMenu = () => {
    setIsAccountDropdownOpen(false);
  };

  const openNotificationDropdownMenu = () => {
    isSetNotificationDropdownOpen(true);
    setIsAccountDropdownOpen(false);
  };

  const closeNotificationDropdownMenu = () => {
    isSetNotificationDropdownOpen(false);
  };

  const openFileLeaveModal = () => {
    isSetFileLeaveModalOpen(true);
    
  };

  const closeFileLeaveModal = () => {
    isSetFileLeaveModalOpen(false)
  };

  const logout = () => {
    const isConfirmed = window.confirm('Are you sure you want to logout?');
    if (isConfirmed) {
      console.log("User logged out");
      navigate('/'); 
    }
  };

  return (
    <div className='staff-header__wrapper'>
      <div className='staff-header__logo-wrapper'>
        <img src={MenuIcon} className='staff-header__hambuger-icon'></img>
        <img src={Logo} className='staff-header__logo'></img>
        <p className='staff-header__logo-text'>Kamp BJ Aquatics</p>
      </div>

      <div className='staff-header__controls-wrapper'>
        <div className='staff-header__notification-wrapper'>
          <FontAwesomeIcon icon={faBell} className='staff-header__notification-icon' onClick={isNotificationDropdownOpen ? closeNotificationDropdownMenu : openNotificationDropdownMenu}/>
            {isNotificationDropdownOpen && (
              <div className='staff-header__notification-dropdown'>
              <p>Notif dropdown</p>
              </div>
            )}    
        </div>
        
        <div className='staff-header__account-wrapper' onClick={isAccountDropdownOpen ? closeStaffDropdownMenu : openStaffDropdownMenu}>
          <div className='staff-header__account-icon-wrapper'>
            <FontAwesomeIcon icon={faUserAlt} className='staff-header__account-name-icon'/>
          </div>
          <p className='staff-header__staff-name'>Steven <FontAwesomeIcon icon={faCaretDown} className='staff-header__account-name-icon'/> </p>

          {isAccountDropdownOpen && (
            <div className='staff-header__staff-account-dropdown'>
              <li className='staff-header__staff-account-dropdown-link' onClick={openFileLeaveModal}>File Leave</li>

                <li className='staff-header__staff-account-dropdown-link' onClick={logout}>
                  Logout
                </li>
            </div>
          )}

        </div>
      </div>
      {isFileLeaveModalOpen &&<StaffFileLeave onSubmit={closeFileLeaveModal} onClose={closeFileLeaveModal}/>}
    </div>
  )
}

export default StaffHeader