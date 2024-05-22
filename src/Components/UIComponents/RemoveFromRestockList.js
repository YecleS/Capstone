import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const RemoveFromRestockList = () => {
  return (
    <FontAwesomeIcon icon={faTrashCan} className='remove-from-list-stock__icon' />
  )
}

export default RemoveFromRestockList