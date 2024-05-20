import React from 'react';
import '../Styles/ApproveLeaveModal.css';

export const ApproveLeaveModal = ({onClose, onSubmit, onReject}) => {
  return (
    <div className='approve-leave-modal__container'>
        <div className='approve-leave-modal__forms-wrapper'>
            <p className='approve-leave-modal__close' onClick={onClose}>&times;</p>
            <div className='approve-leave-modal__content'>
                <textarea className='approve-leave-modal__textarea' placeholder='Message...'></textarea>
            <div className='approve-leave-modal__footer'>
                <button className='add-cart-modal__submit' onClick={onSubmit}>Approve</button>
                <button className='add-cart-modal__submit' onClick={onReject}>Reject</button>
            </div>          
            </div>
        </div>
    </div>
  )
}
