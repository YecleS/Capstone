import React from 'react';
import '../Styles/StaffSidebar.css';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons';
import { faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons';
import { faClapperboard } from '@fortawesome/free-solid-svg-icons';


function StaffSidebar() {
  const location = useLocation();

  return (
    <div className='staff-sidebar__wrapper'>
      <div className='staff-sidebar__link-wrapper'>

        <li className='staff-sidebar__link-list'>
          <NavLink to='/StaffMenu'  className= {location.pathname === '/StaffMenu' ? 'staff-sidebar__link-active' : 'staff-sidebar__link'}><FontAwesomeIcon icon={faClapperboard} className='staff-sidebar_icon'/>Announcement</NavLink>
        </li>
        <li className='staff-sidebar__link-list'>
          <NavLink to='staff-inventory'  className= {location.pathname === '/StaffMenu/staff-inventory' ? 'staff-sidebar__link-active' : 'staff-sidebar__link'}><FontAwesomeIcon icon={faBoxOpen} className='staff-sidebar_icon'/>Inventory</NavLink>
        </li>
        <li className='staff-sidebar__link-list'>
          <NavLink to='staff-sales'  className= {location.pathname === '/StaffMenu/staff-sales' ? 'staff-sidebar__link-active' : 'staff-sidebar__link'}><FontAwesomeIcon icon={faMoneyBillTrendUp} className='staff-sidebar_icon'/>Sales</NavLink>
        </li>
        <li className='staff-sidebar__link-list'>
          <NavLink to='staff-expenses'  className= {location.pathname === '/StaffMenu/staff-expenses' ? 'staff-sidebar__link-active' : 'staff-sidebar__link'}><FontAwesomeIcon icon={faCircleDollarToSlot} className='staff-sidebar_icon'/>Expenses</NavLink>
        </li>

      </div>
    </div>
  )
}

export default StaffSidebar