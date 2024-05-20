import React, { useState } from 'react';
import '../Styles/Sidebar.css';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faCartFlatbed } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faBoxesPacking } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons';
import { faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faClipboardUser } from '@fortawesome/free-solid-svg-icons';
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import { faClapperboard } from '@fortawesome/free-solid-svg-icons';


function Sidebar() {
  const location = useLocation();

  const [isStaffDropdownOpen, setIsStaffDropdownOpen] = useState(false);

    const toggleStaffDropdown = () => {
      setIsStaffDropdownOpen(!isStaffDropdownOpen);
    };

  return (
    <div className='sidebar__wrapper'>
        <div className='sidebar__link-wrapper'>
          <li className='sidebar__link-list'>
            <NavLink to='/OwnerMenu' className= {location.pathname === '/OwnerMenu' ? 'sidebar__link-active' : 'sidebar__link'}><FontAwesomeIcon icon={faLayerGroup} className='sidebar_icon'/>Dashboard</NavLink>
          </li>

          <li className='sidebar__link-list'>
            <NavLink to='/OwnerMenu/announcement' className= {location.pathname === '/OwnerMenu/announcement' ? 'sidebar__link-active' : 'sidebar__link'}><FontAwesomeIcon icon={faClapperboard} className='sidebar_icon'/>Announcement</NavLink>
          </li>

          <li className='sidebar__link-list'>
            <NavLink to='/OwnerMenu/inventory-products' className= {location.pathname === '/OwnerMenu/inventory-products' ? 'sidebar__link-active' : 'sidebar__link'}><FontAwesomeIcon icon={faCartFlatbed} className='sidebar_icon'/>Inventory</NavLink>
          </li>

          <li className='sidebar__link-list'>
            <NavLink to='/OwnerMenu/add-products' className= {location.pathname === '/OwnerMenu/add-products' ? 'sidebar__link-active' : 'sidebar__link'}><FontAwesomeIcon icon={faBoxesPacking} className='sidebar_icon'/>Add Products</NavLink>
          </li>
          
          <li className='sidebar__link-list'>
            <NavLink to='/OwnerMenu/sales-products' className= {location.pathname === '/OwnerMenu/sales-products' ? 'sidebar__link-active' : 'sidebar__link'}><FontAwesomeIcon icon={faMoneyBillTrendUp} className='sidebar_icon'/>Sales</NavLink>
          </li>

          <li className='sidebar__link-list'>
            <NavLink to='/OwnerMenu/expenses' className= {location.pathname === '/OwnerMenu/expenses' ? 'sidebar__link-active' : 'sidebar__link'}><FontAwesomeIcon icon={faCircleDollarToSlot} className='sidebar_icon'/>Expenses</NavLink>
          </li>

          <li className='sidebar__link-list'>
            <NavLink className= 'sidebar__link' onClick={toggleStaffDropdown}><FontAwesomeIcon icon={faUser} className='sidebar_icon'/>Staff</NavLink>
          </li>
          <div className={`staff-dropdown__wrapper ${isStaffDropdownOpen ? 'visible' :''}`}>
            <li className='sidebar__link-list'>
              <NavLink to='/OwnerMenu/staff' className= {location.pathname === '/OwnerMenu/staff' ? 'sidebar__dropdown-link-active' : 'sidebar__dropdown-link'} ><FontAwesomeIcon icon={faClipboardUser} className='sidebar_icon'/>Add Staff</NavLink>
            </li>
            <li className='sidebar__link-list'>
              <NavLink to='/OwnerMenu/leave-tracker' className= {location.pathname === '/OwnerMenu/leave-tracker' ? 'sidebar__dropdown-link-active' : 'sidebar__dropdown-link'}><FontAwesomeIcon icon={faBusinessTime} className='sidebar_icon'/>Leave Tracker</NavLink>
            </li>
            <li className='sidebar__link-list'>
              <NavLink to='/OwnerMenu/time-tracker' className= {location.pathname === '/OwnerMenu/time-tracker' ? 'sidebar__dropdown-link-active' : 'sidebar__dropdown-link'}><FontAwesomeIcon icon={faClock} className='sidebar_icon'/>Time Tracker</NavLink>
            </li>
            <li className='sidebar__link-list'>
              <NavLink to='/OwnerMenu/payroll' className= {location.pathname === '/OwnerMenu/payroll' ? 'sidebar__dropdown-link-active' : 'sidebar__dropdown-link'}><FontAwesomeIcon icon={faPiggyBank} className='sidebar_icon'/>Pay Roll</NavLink>
            </li>
          </div>

          <li className='sidebar__link-list'>
            <NavLink to='/OwnerMenu/supplier' className= {location.pathname === '/OwnerMenu/supplier' ? 'sidebar__link-active' : 'sidebar__link'}><FontAwesomeIcon icon={faTruck} className='sidebar_icon'/>Supplier</NavLink>
          </li>

          <li className='sidebar__link-list'>
            <NavLink to='/OwnerMenu/generate-report' className= {location.pathname === '/OwnerMenu/generate-report' ? 'sidebar__link-active' : 'sidebar__link'}><FontAwesomeIcon icon={faFolder} className='sidebar_icon'/>Generate Report</NavLink>
          </li>

          <li className='sidebar__link-list'>
            <NavLink to='/OwnerMenu/ledger' className= {location.pathname === '/OwnerMenu/ledger' ? 'sidebar__link-active' : 'sidebar__link'}><FontAwesomeIcon icon={faFile} className='sidebar_icon'/>Ledger</NavLink>
          </li>

          
        </div>

    </div>
  )
}

export default Sidebar