import React from 'react';
import '../Styles/StaffExpensesModal.css';

export const StaffExpensesModal = ({onSubmit, onClose}) => {
  return (
    <div className='staff-expenses-modal__container'>
        <div className='staff-expenses-modal__forms-wrapper'>
            <p className='staff-expenses-modal__close' onClick={onClose}>&times;</p>
            <div className='staff-expenses-modal__content'>
                <input type='text' className='staff-expenses-modal__input' placeholder='Name...'></input>
                <input type='text' className='staff-expenses-modal__input' placeholder='Total...'></input>
                <select className='staff-expenses-modal__input'>
                  <option hidden selected disabled >Supplier...</option>
                  <option>Aquarium Laguna</option>
                  <option>JCY Aquatics</option>
                </select>
                <input type='date' className='staff-expenses-modal__input'></input>
                <button className='staff-expenses-modal__submit' onClick={onSubmit}>Add Expenses</button>
            </div>
        </div>
    </div>
  )
}
