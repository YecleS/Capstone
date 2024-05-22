import React, {useState} from 'react';
import { AddSupplierModal } from './AddSupplierModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const EditSupplierIcon = () => {
    const [isModalOpen, isSetModalOpen] = useState(false);

    const openModal = () => {
        isSetModalOpen(true);
    };

    const closeModal = () => {
        isSetModalOpen(false);
    }
  return (
    <>
        <FontAwesomeIcon icon={ faPenToSquare } onClick={openModal} className='edit-supplier__icon'/>
        {isModalOpen && <AddSupplierModal onClose={closeModal} onSubmit={closeModal}/>}
    </>
  )
}

export default EditSupplierIcon