import React from 'react';
import '../Styles/StaffFileLeave.css';

export const StaffFileLeave = ({onSubmit, onClose}) => {
  return (
    <div className='staff-file-leave-modal__container'>
        <div className='staff-file-leave-modal__forms-wrapper'>
            <p className='staff-file-leave-modal__close' onClick={onClose}>&times;</p>
            <p className='staff-file-leave__title'> File For A Leave</p>
            <div className='staff-file-leave-modal__content'>
                <input type='text' className='staff-file-leave-modal__input' placeholder='Username...'></input>
                <textarea className='staff-file-leave-modal__textarea' placeholder='Reason for leave...'></textarea>
                <div className='staff-file-leave-modal__date-wrapper'>
                    <p className='staff-file-leave-modal__date-label'>Leave span</p>
                    <input type='date' className='staff-file-leave-modal__input'></input>
                    <p className='staff-file-leave-modal__date-labe-middle'>Until</p>
                    <input type='date' className='staff-file-leave-modal__input'></input>
                </div>             
                <button className='staff-file-leave-modal__submit' onClick={onSubmit}>Submit</button>
            </div>
        </div>
    </div>
  )
}
