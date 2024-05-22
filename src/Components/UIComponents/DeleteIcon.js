import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const DeleteIcon = () => {
  return (
    <>
      <FontAwesomeIcon icon={faTrashCan} className='delete__icon' />
    </>
  )
}

export default DeleteIcon