import React from 'react';
import '../Styles/AddToCartModal.css'

function AddToCartModal({onSubmit, onClose}) {
  return (
    <div className='add-to-cart-modal__container'>
        <div className='add-to-cart-modal__forms-wrapper'>
            <p className='add-to-cart-modal__close' onClick={onClose}>&times;</p>
            <div className='add-to-cart-modal__content'>
                <input type='text' placeholder='Quantity...' className='add-to-cart-modal__input'></input>
                <input type='text' placeholder='Discount' className='add-to-cart-modal__input'></input>
                <button className='add-cart-modal__submit' onClick={onSubmit}>Add To Cart </button>
            </div>
        </div>
    </div>
  )
}

export default AddToCartModal