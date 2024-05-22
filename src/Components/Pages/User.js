import React, { useState } from 'react';
import '../Styles/User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { AddUserModal } from '../UIComponents/AddUserModal';
import EditStaffIcon from '../UIComponents/EditStaffIcon';
import DeleteIcon from '../UIComponents/DeleteIcon';

function User() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <section className='user'>
      <div className='user__controls-wrapper'>
        <input type='text' placeholder='Search by...' className='user__input'></input>

        <div className='user__right-controls-wrapper'>
          <select className='user__category'>
            <option value="" disable selected hidden>Filter By...</option>
            <option value="Name">Name</option>
            <option value="Date">Date</option>
            <option value="Sales">Sales</option>
            <option value="Category">Category</option>
          </select>
          <button className='user__add-button' onClick={openModal}><FontAwesomeIcon icon={faPlus}/> Add Staff</button>
          {isModalOpen &&<AddUserModal onSubmit={closeModal} onClose={closeModal}/>}
        </div>
      </div>

      <div className='user__table-wrapper'>
        <table className='user__table'>
          <thead>
            <tr>
              <th className='user__table-th'>ID</th>
              <th className='user__table-th'>Name</th>
              <th className='user__table-th'>Access</th>
              <th className='user__table-th'>Rate</th>
              <th className='user__table-th'></th>
            </tr>
          </thead>
          <tbody>
            <tr className='user__table-body-tr'>
              <td className='user__table-td'>1</td>
              <td className='user__table-td'>Steven</td>
              <td className='user__table-td'>sales</td>
              <td className='user__table-td'>Fixed</td>
              <td className='user__table-td'><EditStaffIcon /><DeleteIcon /></td>
            </tr>
            <tr className='user__table-body-tr'>
              <td className='user__table-td'>2</td>
              <td className='user__table-td'>James</td>
              <td className='user__table-td'>Expenses</td>
              <td className='user__table-td'>Fixed</td>
              <td className='user__table-td'><EditStaffIcon /><DeleteIcon /></td>
            </tr>
            <tr className='user__table-body-tr'>
              <td className='user__table-td'>3</td>
              <td className='user__table-td'>Krishia</td>
              <td className='user__table-td'>sales, expenses</td>
              <td className='user__table-td'>Fixed</td>
              <td className='user__table-td'><EditStaffIcon /><DeleteIcon /></td>
            </tr>
            <tr className='user__table-body-tr'>
              <td className='user__table-td'>4</td>
              <td className='user__table-td'>Christine</td>
              <td className='user__table-td'>sales</td>
              <td className='user__table-td'>Hourly</td>
              <td className='user__table-td'><EditStaffIcon /><DeleteIcon /></td>
            </tr>
            <tr className='user__table-body-tr'>
              <td className='user__table-td'>5</td>
              <td className='user__table-td'>Angel</td>
              <td className='user__table-td'>sales, expenses</td>
              <td className='user__table-td'>Hourly</td>
              <td className='user__table-td'><EditStaffIcon /><DeleteIcon /></td>
            </tr>
            <tr className='user__table-body-tr'>
              <td className='user__table-td'>6</td>
              <td className='user__table-td'>Angel</td>
              <td className='user__table-td'>sales, expenses</td>
              <td className='user__table-td'>Hourly</td>
              <td className='user__table-td'><EditStaffIcon /><DeleteIcon /></td>
            </tr>
            <tr className='user__table-body-tr'>
              <td className='user__table-td'>7</td>
              <td className='user__table-td'>Renniel</td>
              <td className='user__table-td'>sales, expenses</td>
              <td className='user__table-td'>Fixed</td>
              <td className='user__table-td'><EditStaffIcon /><DeleteIcon /></td>
            </tr>
            <tr className='user__table-body-tr'>
              <td className='user__table-td'>8</td>
              <td className='user__table-td'>Dennis</td>
              <td className='user__table-td'>sales</td>
              <td className='user__table-td'>Hourly</td>
              <td className='user__table-td'><EditStaffIcon /><DeleteIcon /></td>
            </tr>
            <tr className='user__table-body-tr'>
              <td className='user__table-td'>9</td>
              <td className='user__table-td'>Shannyn</td>
              <td className='user__table-td'>Expenses</td>
              <td className='user__table-td'>Hourly</td>
              <td className='user__table-td'><EditStaffIcon /><DeleteIcon /></td>
            </tr>
          </tbody>
        </table>
      </div>

    </section>
  )
}

export default User