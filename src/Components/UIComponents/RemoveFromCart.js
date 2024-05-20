import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const RemoveFromCart = () => {
  return (
    <>
        <FontAwesomeIcon icon={faTrashCan} className='remove-from-cart__icon' />
    </>
  )
}

export default RemoveFromCart