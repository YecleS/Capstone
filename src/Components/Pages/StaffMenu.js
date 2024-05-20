import React from 'react';
import '../Styles/StaffMenu.css';
import { Routes, Route } from 'react-router-dom';
import StaffHeader from '../UIComponents/StaffHeader';
import StaffSidebar from '../UIComponents/StaffSidebar';
import StaffAnnouncement from './StaffAnnouncement';
import StaffInventory from '../Pages/InventoryProducts'
import StaffSales from '../Pages/StaffSales';
import StaffExpenses from '../Pages/StaffExpenses';
import StaffLeave from '../Pages/StaffLeave';

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
              <Route index element ={<StaffAnnouncement />}/>
              <Route path='staff-inventory' element={<StaffInventory />}/>
              <Route path='staff-sales' element={<StaffSales />}/>
              <Route path='staff-expenses' element={<StaffExpenses />}/>
              <Route path='staff-leave' element={<StaffLeave />}/>
            </Routes>
          </main>
        </div>    
      </div>
  )
}

export default StaffMenu