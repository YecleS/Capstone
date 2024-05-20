import React, {useState} from 'react';
import '../Styles/Supplier.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { AddSupplierModal } from '../UIComponents/AddSupplierModal';

function Supplier() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

  return (
    <section className='supplier'>
      <div className='supplier__controls-wrapper'>
        <input type='text' placeholder='Search by...' className='supplier__input'></input>

        <div className='supplier__right-controls-wrapper'>
          <select className='supplier__category'>
            <option value="" disable selected hidden>Filter By...</option>
            <option value="Name">Name</option>
            <option value="Date">Date</option>
            <option value="Sales">Sales</option>
            <option value="Category">Category</option>
          </select>
          <button className='supplier__add-button' onClick={openModal}><FontAwesomeIcon icon={faPlus}/> Add Supplier</button>
          {isModalOpen && <AddSupplierModal onClose={closeModal} onSubmit={closeModal}/>}
        </div>
      </div>

      <div className='supplier__table-wrapper'>
        <table className='supplier__table'>
          <thead>
            <tr>
              <th className='supplier__table-th'>ID</th>
              <th className='supplier__table-th'>Name</th>
              <th className='supplier__table-th'>Contacts</th>
              <th className='supplier__table-th'>Email</th>
              <th className='supplier__table-th'>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr className='supplier__table-body-tr'>
              <td className='supplier__table-td'>1</td>
              <td className='supplier__table-td'>Fish Trading INC</td>
              <td className='supplier__table-td'>09217892775</td>
              <td className='supplier__table-td'>FishTrading@gmail.com</td>
              <td className='supplier__table-td'>Laguna</td>
            </tr>
            <tr className='supplier__table-body-tr'>
              <td className='supplier__table-td'>2</td>
              <td className='supplier__table-td'>Laguna Aqua</td>
              <td className='supplier__table-td'>09217892775</td>
              <td className='supplier__table-td'>LagunaAqua@gmail.com</td>
              <td className='supplier__table-td'>Laguna</td>
            </tr>
            <tr className='supplier__table-body-tr'>
              <td className='supplier__table-td'>3</td>
              <td className='supplier__table-td'>Fish Laguna INC</td>
              <td className='supplier__table-td'>09217892775</td>
              <td className='supplier__table-td'>FishLaguna@gmail.com</td>
              <td className='supplier__table-td'>Laguna</td>
            </tr>
            <tr className='supplier__table-body-tr'>
              <td className='supplier__table-td'>4</td>
              <td className='supplier__table-td'>JCY Aquatics</td>
              <td className='supplier__table-td'>09217892775</td>
              <td className='supplier__table-td'>JCY@gmail.com</td>
              <td className='supplier__table-td'>Laguna</td>
            </tr>
          </tbody>
        </table>
      </div>

    </section>
  )
}

export default Supplier