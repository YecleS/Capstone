import React from 'react';
import '../Styles/StaffMenu.css';
import { Routes, Route } from 'react-router-dom';
import StaffHeader from '../UIComponents/StaffHeader';
import StaffSidebar from '../UIComponents/StaffSidebar';
import StaffInventory from '../Pages/InventoryProducts'
import StaffSales from '../Pages/StaffSales';
import StaffRestock from './StaffRestock';
import StaffUtilities from './StaffUtilities';

function StaffMenu() {
  return (
    <div className='staff-homepage'>
        <header className='staff-homepage__header'>
            <StaffHeader />
        </header>
        <div className='staff-homepage__body'>
          <aside className='staff-homepage__sidebar'>
            <StaffSidebar />
          </aside>
          <main className='staff-homepage__main-content'>
            <Routes>
              <Route index element={<StaffInventory />}/>
              <Route path='staff-sales' element={<StaffSales />}/>
              <Route path='staff-restock' element={<StaffRestock />}/>
              <Route path='staff-utilities' element={<StaffUtilities />}/>
            </Routes>
          </main>
        </div>    
      </div>
  )
}

export default StaffMenu