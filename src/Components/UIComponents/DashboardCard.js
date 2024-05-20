import React from 'react';
import '../Styles/DashboardCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const DashboardCard = ({icon, backgroundColor, textNumber, textDescription}) => {
    const cardStyle = {
        backgroundColor: backgroundColor,
      };

  return (
    <div className='card-wrapper' style={cardStyle}>
        <div className='card__text-wrapper'>
            <p className='card__number'>{textNumber}</p>
            <p className='card__description'>{textDescription}</p>
        </div>
        <div className='card__icon-wrapper'>
            <FontAwesomeIcon icon={icon} className='card__icon'/>
        </div>
        
    </div>
  )
}
