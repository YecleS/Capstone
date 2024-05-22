import React from 'react';
import '../Styles/StaffRestockModal.css';

export const StaffRestockModal = ({onSubmit, onClose}) => {
  return (
    <div className='staff-expenses-modal__container'>
        <div className='staff-expenses-modal__forms-wrapper'>
            <p className='staff-expenses-modal__close' onClick={onClose}>&times;</p>
            <div className='staff-expenses-modal__content'>
                <select className='staff-expenses-modal__input'>
                  <option hidden selected disabled >Product Name...</option>
                  <option>Product 1</option>
                  <option>Product 2</option>
                  <option>Product 3</option>
                  <option>Product 4</option>
                </select>
                <select className='staff-expenses-modal__input'>
                  <option hidden selected disabled >Model...</option>
                  <option>DZ130</option>
                  <option>CD223</option>
                  <option>XZ1302</option>
                  <option>ZZ130</option>
                </select>
                <select className='staff-expenses-modal__input'>
                  <option hidden selected disabled >Size/Weight...</option>
                  <option>15ml</option>
                  <option>25ml</option>
                  <option>35ml</option>
                  <option>60ml</option>
                </select>
                <input type='text' className='staff-expenses-modal__input' placeholder='Quantity...'></input>
                <input type='text' className='staff-expenses-modal__input' placeholder='Total...'></input>
                <select className='staff-expenses-modal__input'>
                  <option hidden selected disabled >Supplier...</option>
                  <option>Aquarium Laguna</option>
                  <option>JCY Aquatics</option>
                </select>
                <input type='date' className='staff-expenses-modal__input'></input>
                <button className='staff-expenses-modal__submit' onClick={onSubmit}>Resock Product</button>
            </div>
        </div>
    </div>
  )
}
