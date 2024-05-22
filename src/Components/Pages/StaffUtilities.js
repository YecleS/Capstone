import React, {useState} from 'react';
import '../Styles/StaffUtilities.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { StaffUtilitiesModal } from '../UIComponents/StaffUtilitiesModal';

function StaffUtilities() {
    const [isModalOpen, isSetModalOpen] = useState(false);

    const openModal = () => {
        isSetModalOpen(true)
    };

    const closeModal = () => {
        isSetModalOpen(false)
    };

  return (
    <section className='staff-utilities'>
      <div className='staff-utilities__controls-wrapper'>
        <input type='text' placeholder='Search by...' className='staff-utilities__input'></input>

        <div className='staff-utilities__right-controls-wrapper'>
          <select className='staff-utilities__category'>
            <option value="" disable selected hidden>Filter By...</option>
            <option value="Name">Name</option>
            <option value="Date">Date</option>
            <option value="Sales">Total</option>
            <option value="Category">Supplier</option>
          </select>
          <button className='staff-utilities_add-button' onClick={openModal}><FontAwesomeIcon icon={faPlus}/> Add Utilities</button>
          {isModalOpen && <StaffUtilitiesModal onSubmit={closeModal} onClose={closeModal} />}
        </div>
      </div>

      <div className='staff-utilities__table-wrapper'>
        <table className='staff-utilities__table'>
          <thead>
            <tr>
              <th className='staff-utilities__table-th'>ID</th>
              <th className='staff-utilities__table-th'>Name</th>
              <th className='staff-utilities__table-th'>Total</th>
              <th className='staff-utilities__table-th'>Date</th>
            </tr>
          </thead>
          <tbody>
          <tr className='staff-utilities__table-body-tr'>
              <td className='staff-utilities__table-td'>1</td>
              <td className='staff-utilities__table-td'>Rent</td>
              <td className='staff-utilities__table-td'>240</td>
              <td className='staff-utilities__table-td'>10/28/2024</td>
            </tr>
            <tr className='staff-utilities__table-body-tr'>
                <td className='staff-utilities__table-td'>2</td>
              <td className='staff-utilities__table-td'>Wifi</td>
              <td className='staff-utilities__table-td'>1160</td>
              <td className='staff-utilities__table-td'>10/28/2024</td>
            </tr>
            <tr className='staff-utilities__table-body-tr'>
              <td className='staff-utilities__table-td'>3</td>
              <td className='staff-utilities__table-td'>Water Bill</td>
              <td className='staff-utilities__table-td'>500</td>
              <td className='staff-utilities__table-td'>10/28/2024</td>
            </tr>
            <tr className='staff-utilities__table-body-tr'>
              <td className='staff-utilities__table-td'>4</td>
              <td className='staff-utilities__table-td'>Electricity Bill</td>
              <td className='staff-utilities__table-td'>3200</td>
              <td className='staff-utilities__table-td'>10/28/2024</td>
            </tr>

          </tbody>
        </table>
      </div>

    </section>
  )
}

export default StaffUtilities