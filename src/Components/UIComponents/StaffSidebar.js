import React,{useState} from 'react';
import '../Styles/StaffSidebar.css';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons';
import { faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons';
import { faBoxesPacking } from '@fortawesome/free-solid-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';



function StaffSidebar() {
  const location = useLocation();
  const [isDropdownExpensesOpen, isSetDropdownExpensesOpen] = useState(false);

  const toggleDropdown = () => {
    isSetDropdownExpensesOpen(!isDropdownExpensesOpen)
  };

  const CloseDropdown = () => {
    isSetDropdownExpensesOpen(false);
  };

  return (
    <div className='staff-sidebar__wrapper'>
      <div className='staff-sidebar__link-wrapper'>

        <li className='staff-sidebar__link-list'>
          <NavLink to='/StaffMenu' className= {location.pathname === '/StaffMenu' ? 'staff-sidebar__link-active' : 'staff-sidebar__link'} onClick={CloseDropdown}><FontAwesomeIcon icon={faBoxOpen} className='staff-sidebar_icon'/>Inventory</NavLink>
        </li>
        <li className='staff-sidebar__link-list'>
          <NavLink to='staff-sales' className= {location.pathname === '/StaffMenu/staff-sales' ? 'staff-sidebar__link-active' : 'staff-sidebar__link'} onClick={CloseDropdown}><FontAwesomeIcon icon={faMoneyBillTrendUp} className='staff-sidebar_icon'/>Sales</NavLink>
        </li>
        <li className='staff-sidebar__link-list'>
          <NavLink className= 'staff-sidebar__link' onClick={toggleDropdown}><FontAwesomeIcon icon={faCircleDollarToSlot} className='staff-sidebar_icon'/>Expenses</NavLink>
        </li>
        {isDropdownExpensesOpen && <div className='staff-sidebar__expenses-dropdown'>
          <li className='staff-sidebar__link-list'>
            <NavLink to='staff-restock'  className= {location.pathname === '/StaffMenu/staff-restock' ? 'staff-sidebar__dropdown-link-active' : 'staff-sidebar__dropdown-link'}><FontAwesomeIcon icon={faBoxesPacking} className='staff-sidebar_icon'/>Restock</NavLink>
          </li>
          <li className='staff-sidebar__link-list'>
            <NavLink to='staff-utilities'  className= {location.pathname === '/StaffMenu/staff-utilities' ? 'staff-sidebar__dropdown-link-active' : 'staff-sidebar__dropdown-link'}><FontAwesomeIcon icon={faBolt} className='staff-sidebar_icon'/>Utilities</NavLink>
          </li>
        </div>}
        

      </div>
    </div>
  )
}

export default StaffSidebar