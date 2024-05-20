import React, {useState,} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import AddToCartModal from './AddToCartModal';

export const StaffSalesAddToCart = () => {
    const [isAddToCartModalOpen, setIsAddToCartModalOpen] = useState(false);

    const openModal = () => {
        setIsAddToCartModalOpen(true);
    };

    const closeModal = () => {
        setIsAddToCartModalOpen(false);
    };

  return (
    <>
        <FontAwesomeIcon icon={faCartPlus} onClick= {openModal} className='add-to-cart-icon'/>
        
        {isAddToCartModalOpen &&<AddToCartModal onSubmit={closeModal} onClose={closeModal}/>}
    </>
  )
}
