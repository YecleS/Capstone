import React from 'react';
import '../Styles/AddSupplierModal.css';

export const AddSupplierModal = ({onSubmit, onClose}) => {
  return (
    <div className='add-supplier-modal__container'>
        <div className='add-supplier-modal__forms-wrapper'>
            <p className='add-supplier-modal__close' onClick={onClose}>&times;</p>
            <div className='add-supplier-modal__content'>
                <input type='text' placeholder='Supplier Name...' className='add-supplier-modal__input'></input>
                <input type='text' placeholder='Contacts...' className='add-supplier-modal__input'></input>
                <input type='text' placeholder='Email...' className='add-supplier-modal__input'></input>
                <input type='text' placeholder='Location...' className='add-supplier-modal__input'></input>
            <div className='add-supplier-modal__footer'>
                <button className='add-supplier-modal__submit' onClick={onSubmit}>Add Supplier</button>
            </div>          
            </div>
        </div>
    </div>
  )
}
