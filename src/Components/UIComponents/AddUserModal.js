import React from 'react';
import '../Styles/AddUserModal.css'

export const AddUserModal = ({onSubmit, onClose}) => {
  return (
    <div className='add-user-modal__container'>
        <div className='add-user-modal__forms-wrapper'>
            <p className='add-user-modal__close' onClick={onClose}>&times;</p>
            <div className='add-user-modal__content'>
                <input type='text' className='add-user-modal__input' placeholder='First Name...'></input>
                <input type='text' className='add-user-modal__input' placeholder='Last Name...'></input>
                <input type='text' className='add-user-modal__input' placeholder='Username...'></input>
                <input type='password' className='add-user-modal__input' placeholder='Password...'></input>
                <div className='add-user-modal__access-controls-wrapper'>
                    <div className='add-user-modal__checkbox-controls-wrapper'>
                        <p className='add-user-modal__access-title'>Access</p>             
                        <div className='add-user-modal__checkbox-wrapper'>
                            <input type='checkbox' id='chkSales' className='add-user-modal__input-checkbox'></input>
                            <label for = 'chkSales'>Sales</label>
                        </div>
                        <div className='add-user-modal__checkbox-wrapper'>
                            <input type='checkbox' id='chkExpenses' className='add-user-modal__input-checkbox'></input>
                            <label for = 'chkExpenses'>Expenses</label>
                        </div>
                    </div>
                    <div className='add-user-modal__checkbox-controls-wrapper'>
                        <p className='add-user-modal__access-title'>Salary Rate</p>  
                        <div className='add-user-modal__checkbox-wrapper'>
                            <input type='checkbox' id='chkFixed' className='add-user-modal__input-checkbox'></input>
                            <label for = 'chkFixed'>Fixed Rate</label>
                        </div>
                        <div className='add-user-modal__checkbox-wrapper'>
                            <input type='checkbox' id='chkHourly' className='add-user-modal__input-checkbox'></input>
                            <label for = 'chkHourly'>Hourly Rate</label>
                        </div>  
                    </div>                          
                </div>
                <button className='add-user-modal__submit' onClick={onSubmit}>Add Staff</button>
            </div>
        </div>
    </div>
  )
}
