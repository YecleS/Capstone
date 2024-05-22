import React from 'react';
import '../Styles/StaffUtilitiesModal.css';

export const StaffUtilitiesModal = ({onSubmit, onClose}) => {
  return (
    <div className='staff-utilities-modal__container'>
        <div className='staff-utilities-modal__forms-wrapper'>
            <p className='staff-utilities-modal__close' onClick={onClose}>&times;</p>
            <div className='staff-utilities-modal__content'>
                <input type='text' className='staff-utilities-modal__input' placeholder='Name...'></input>
                <input type='text' className='staff-utilities-modal__input' placeholder='Total...'></input>
                <input type='date' className='staff-utilities-modal__input'></input>
                <button className='staff-utilities-modal__submit' onClick={onSubmit} >Submit</button>
            </div>
        </div>
    </div>
  )
}
