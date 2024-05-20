import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { PayRollModal } from './PayRollModal';

export const PayRollIcon = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

  return (
    <>
        <FontAwesomeIcon icon={faCreditCard} className='pay-roll__icon' onClick={openModal}/>

        {isModalOpen && <PayRollModal onClose={closeModal} onSubmit={closeModal}/>}
    </>
  )
}
