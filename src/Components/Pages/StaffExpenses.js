import React, {useState} from 'react';
import '../Styles/StaffExpenses.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { StaffExpensesModal } from '../UIComponents/StaffExpensesModal';

function StaffExpenses() {
  const [isStaffExpensesModalOpen, isSetStaffExpensesModalOpen] = useState(false);

  const openModal = () => {
    isSetStaffExpensesModalOpen(true);
  };

  const closeModal = () => {
    isSetStaffExpensesModalOpen(false);
  }

  return (
    <section className='staff-expenses'>
      <div className='staff-expenses__controls-wrapper'>
        <input type='text' placeholder='Search by...' className='staff-expenses__input'></input>

        <div className='staff-expenses__right-controls-wrapper'>
          <select className='staff-expenses__category'>
            <option value="" disable selected hidden>Filter By...</option>
            <option value="Name">Name</option>
            <option value="Date">Date</option>
            <option value="Sales">Total</option>
            <option value="Category">Supplier</option>
          </select>
          <button className='staff-expenses__add-button' onClick={openModal}><FontAwesomeIcon icon={faPlus}/> Add Expenses</button>
          {isStaffExpensesModalOpen &&<StaffExpensesModal onSubmit={closeModal} onClose={closeModal}/>}
        </div>
      </div>

      <div className='staff-expenses__table-wrapper'>
        <table className='staff-expenses__table'>
          <thead>
            <tr>
              <th className='staff-expenses__table-th'>ID</th>
              <th className='staff-expenses__table-th'>Name</th>
              <th className='staff-expenses__table-th'>Supplier</th>
              <th className='staff-expenses__table-th'>Total</th>
              <th className='staff-expenses__table-th'>Date</th>
            </tr>
          </thead>
          <tbody>
          <tr className='staff-expenses__table-body-tr'>
              <td className='staff-expenses__table-td'>1</td>
              <td className='staff-expenses__table-td'>Rent</td>
              <td className='staff-expenses__table-td'></td>
              <td className='staff-expenses__table-td'>240</td>
              <td className='staff-expenses__table-td'>10/28/2024</td>
            </tr>
            <tr className='staff-expenses__table-body-tr'>
              <td className='staff-expenses__table-td'>2</td>
              <td className='staff-expenses__table-td'>restock</td>
              <td className='staff-expenses__table-td'>Aquarium Laguna</td>
              <td className='staff-expenses__table-td'>8500</td>
              <td className='staff-expenses__table-td'>10/28/2024</td>
            </tr>
            <tr className='staff-expenses__table-body-tr'>
              <td className='staff-expenses__table-td'>3</td>
              <td className='staff-expenses__table-td'>restock</td>
              <td className='staff-expenses__table-td'>JCY Aquatics</td>
              <td className='staff-expenses__table-td'>1400</td>
              <td className='staff-expenses__table-td'>10/28/2024</td>
            </tr>

          </tbody>
        </table>
      </div>

    </section>
  )
}

export default StaffExpenses