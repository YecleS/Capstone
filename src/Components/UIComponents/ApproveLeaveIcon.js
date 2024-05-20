import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckToSlot } from '@fortawesome/free-solid-svg-icons';
import { ApproveLeaveModal } from './ApproveLeaveModal';

export const ApproveLeaveIcon = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
        <FontAwesomeIcon icon={faCheckToSlot} className='approve-leave-request__icon' onClick={openModal}/>

        {isModalOpen && <ApproveLeaveModal onClose={closeModal} onSubmit={closeModal} onReject={closeModal}/>}
    </>
  )
}
