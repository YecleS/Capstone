import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { AddProductsModal } from './AddProductsModal';

export const EditProductsIcon = () => {
    const [isModalOpen, isSetModalOpen] = useState(false);

    const openModal = () => {
        isSetModalOpen(true);
    };

    const closeModal = () => {
        isSetModalOpen(false);
    }

  return (
    <>
        <FontAwesomeIcon icon={ faPenToSquare } onClick={openModal} className='edit-products__icon'/>
        {isModalOpen && <AddProductsModal onClose={closeModal} onSubmit={closeModal}/>}
    </>
  )
}
