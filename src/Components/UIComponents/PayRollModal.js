import React from 'react';
import '../Styles/PayRollModal.css';

export const PayRollModal = ({onClose, onSubmit}) => {
  return (
    <div className='pay-roll-modal__container'>
        <div className='pay-roll-modal__forms-wrapper'>
            <p className='pay-roll-modal__close' onClick={onClose}>&times;</p>
            <div className='pay-roll-modal__content'>
                <input type='text' placeholder='Amount...' className='pay-roll-modal__input'></input>
                <input type='text' placeholder='Overtime Pay...' className='pay-roll-modal__input'></input>
                <input type='date' className='pay-roll-modal__input'></input>
            <div className='pay-roll-modal__footer'>
                <button className='pay-roll-modal__submit' onClick={onSubmit}>Release Pay</button>
            </div>          
            </div>
        </div>
    </div>
  )
}
