import React from 'react';
import '../Styles/OwnerMenu.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../UIComponents/Header';
import Sidebar from '../UIComponents/Sidebar';
import Dashboard from './Dashboard';
import InventoryProducts from './InventoryProducts';
import AddProducts from '../Pages/AddProducts';
import SalesProducts from '../Pages/SalesProducts';
import Expenses from '../Pages/Expenses';
import Staff from '../Pages/User';
import GenerateReport from '../Pages/GenerateReport';
import Ledger from '../Pages/Ledger';
import Announcement from '../Pages/Announcement';
import LeaveTracker from '../Pages/LeaveTracker';
import TimeTracker from '../Pages/TimeTracker';
import PayRoll from '../Pages/PayRoll';
import Supplier from './Supplier';


function OwnerMenu() {
  return (
      <div className='homepage'>
        <header className='header'>
          <Header />
        </header>
        <div className='homepage__body'>
          <aside className='sidebar'>
            <Sidebar />
          </aside>
          <main className='main-content'>
            <Routes>
              <Route index element ={<Dashboard />}/>
              <Route path = 'announcement' element = {<Announcement />} />
              <Route path = 'inventory-products' element = {<InventoryProducts />} />
              <Route path = 'add-products' element = {<AddProducts />} />
              <Route path = 'sales-products' element = {<SalesProducts />} />
              <Route path = 'expenses' element = {<Expenses />} />
              <Route path = 'staff' element = {<Staff />} />
              <Route path = 'leave-tracker' element = {<LeaveTracker />} />
              <Route path = 'time-tracker' element = {<TimeTracker />} />
              <Route path = 'payroll' element = {<PayRoll />} />
              <Route path = 'supplier' element = {<Supplier />} />
              <Route path = 'generate-report' element = {<GenerateReport />} />
              <Route path = 'ledger' element = {<Ledger />} />
            </Routes>           
          </main>
        </div>    
      </div>
  )
}

export default OwnerMenu