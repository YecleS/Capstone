import React from 'react';
import '../Styles/AddProductsModal.css';

export const AddProductsModal = ({onSubmit, onClose}) => {
  return (
    <div className='add-products-modal__container'>
        <div className='add-products-modal__forms-wrapper'>
            <p className='add-products-modal__close' onClick={onClose}>&times;</p>
            <div className='add-products-modal__content'>
                <input type='text' className='add-products-modal__input' placeholder='Product Name...'></input>
                <input type='text' className='add-products-modal__input' placeholder='Model...'></input>
                <input type='text' className='add-products-modal__input' placeholder='Quantity...'></input>
                <div className='add-products__checkbox-controls-wrapper'>
                        <p className='add-products__access-title'>Pricing Metric</p>  
                        <div className='add-products__checkbox-wrapper'>
                            <input type='checkbox' id='chkGrams' className='add-products__input-checkbox'></input>
                            <label for = 'chkGrams'>G</label>
                        </div>
                        <div className='add-products__checkbox-wrapper'>
                            <input type='checkbox' id='chkMeter' className='add-products__input-checkbox'></input>
                            <label for = 'chkMeter'>M</label>
                        </div>
                        <div className='add-products__checkbox-wrapper'>
                            <input type='checkbox' id='chkMilimeter' className='add-products__input-checkbox'></input>
                            <label for = 'chkMilimeter'>MM</label>
                        </div>
                        <div className='add-products__checkbox-wrapper'>
                            <input type='checkbox' id='Mililiter' className='add-products__input-checkbox'></input>
                            <label for = 'Mililiter'>ML</label>
                        </div>
                        <div className='add-products__checkbox-wrapper'>
                            <input type='checkbox' id='Kilogram' className='add-products__input-checkbox'></input>
                            <label for = 'Kilogram'>KG</label>
                        </div>    
                    </div>   
                <input type='text' className='add-products-modal__input' placeholder='SRP...'></input>
                <button className='add-products-modal__submit' onClick={onSubmit}>Add Products</button>
            </div>
        </div>
    </div>
  )
}
