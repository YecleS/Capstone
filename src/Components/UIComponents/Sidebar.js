import React, { useState } from 'react';
import '../Styles/Sidebar.css';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxesStacked, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faCartFlatbed } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faBoxesPacking } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons';
import { faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { faClapperboard } from '@fortawesome/free-solid-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';




function Sidebar() {
  const location = useLocation();

  const [isSalesDropdownOpen, setIsSalesDropdownOpen] = useState(false);
  const [isExpensesDropdownOpen, setIsExpensesDropdownOpen] = useState(false);

    const toggleSalesDropdown = () => {
      setIsSalesDropdownOpen(!isSalesDropdownOpen);
    };

    const toggleExpensesDropdown = () => {
      setIsExpensesDropdownOpen(!isExpensesDropdownOpen);
    };


  return (
    <div className='sidebar__wrapper'>
        <div className='sidebar__link-wrapper'>
          <li className='sidebar__link-list'>
            <NavLink to='/OwnerMenu' className= {location.pathname === '/OwnerMenu' ? 'sidebar__link-active' : 'sidebar__link'}><FontAwesomeIcon icon={faLayerGroup} className='sidebar_icon'/>Dashboard</NavLink>
          </li>
          
          <li className='sidebar__link-list'>
            <NavLink to='/OwnerMenu/inventory-products' className= {location.pathname === '/OwnerMenu/inventory-products' ? 'sidebar__link-active' : 'sidebar__link'}><FontAwesomeIcon icon={faCartFlatbed} className='sidebar_icon'/>Inventory</NavLink>
          </li>

          <li className='sidebar__link-list'>
            <NavLink to='/OwnerMenu/add-products' className= {location.pathname === '/OwnerMenu/add-products' ? 'sidebar__link-active' : 'sidebar__link'}><FontAwesomeIcon icon={faBoxesPacking} className='sidebar_icon'/>Products</NavLink>
          </li>

          <li className='sidebar__link-list'>
            <NavLink className='sidebar__link' onClick={toggleSalesDropdown}><FontAwesomeIcon icon={faMoneyBillTrendUp} className='sidebar_icon'/>Sales</NavLink>
          </li>
          {isSalesDropdownOpen &&
            <div className='sidebar__dropdown-sales'>
              <li className='sidebar__link-list'>
                <NavLink to='/OwnerMenu/point-of-sales' className= {location.pathname === '/OwnerMenu/point-of-sales' ? 'sidebar__dropdown-link-active' : 'sidebar__dropdown-link'}><FontAwesomeIcon icon={faCoins} className='sidebar_icon'/>Point Of Sales</NavLink>
              </li>
              <li className='sidebar__link-list'>
                <NavLink to='/OwnerMenu/sales-products' className= {location.pathname === '/OwnerMenu/sales-products' ? 'sidebar__dropdown-link-active' : 'sidebar__dropdown-link'}><FontAwesomeIcon icon={faClapperboard} className='sidebar_icon'/>Sales Record</NavLink>
              </li>
          </div>
          }
          

          <li className='sidebar__link-list'>
            <NavLink className='sidebar__link' onClick={toggleExpensesDropdown}><FontAwesomeIcon icon={faCircleDollarToSlot} className='sidebar_icon'/>Expenses</NavLink>
          </li>
          {isExpensesDropdownOpen && 
            <div className='sidebar__dropdown-expenses'>
              <li className='sidebar__link-list'>
                <NavLink to='/OwnerMenu/restock' className= {location.pathname === '/OwnerMenu/restock' ? 'sidebar__dropdown-link-active' : 'sidebar__dropdown-link'}><FontAwesomeIcon icon={faBoxesStacked} className='sidebar_icon'/>Restock</NavLink>
              </li>
              <li className='sidebar__link-list'>
                <NavLink to='/OwnerMenu/utilities' className= {location.pathname === '/OwnerMenu/utilities' ? 'sidebar__dropdown-link-active' : 'sidebar__dropdown-link'}><FontAwesomeIcon icon={faBolt} className='sidebar_icon'/>Utilities</NavLink>
              </li>
              <li className='sidebar__link-list'>
                <NavLink to='/OwnerMenu/expenses' className= {location.pathname === '/OwnerMenu/expenses' ? 'sidebar__dropdown-link-active' : 'sidebar__dropdown-link'}><FontAwesomeIcon icon={faClapperboard} className='sidebar_icon'/>Expenses Record</NavLink>
              </li>
            </div>
          }
          


          <li className='sidebar__link-list'>
            <NavLink to='/OwnerMenu/staff' className= {location.pathname === '/OwnerMenu/staff' ? 'sidebar__link-active' : 'sidebar__link'}><FontAwesomeIcon icon={faUser} className='sidebar_icon'/>Staff</NavLink>
          </li>

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