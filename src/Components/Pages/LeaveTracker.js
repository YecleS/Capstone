import React from 'react';
import '../Styles/LeaveTracker.css';
import { ApproveLeaveIcon } from '../UIComponents/ApproveLeaveIcon';

function LeaveTracker() {
  return (
    <section className='leave-tracker'>
      <div className='leave-tracker__controls-wrapper'>
        <input type='text' placeholder='Search by...' className='leave-tracker__input'></input>

        <div className='leave-tracker__right-controls-wrapper'>
          <select className='leave-tracker__category'>
            <option value="" disable selected hidden>Filter By...</option>
            <option value="Name">Name</option>
            <option value="Date">Date</option>
            <option value="Sales">Sales</option>
            <option value="Category">Category</option>
          </select>
        </div>
      </div>

      <div className='leave-tracker__table-wrapper'>
        <table className='leave-tracker__table'>
          <thead>
            <tr>
              <th className='leave-tracker__table-th'>ID</th>
              <th className='leave-tracker__table-th'>Name</th>
              <th className='leave-tracker__table-th'>Leave Status</th>
              <th className='leave-tracker__table-th'>Date Aproved</th>
              <th className='leave-tracker__table-th'></th>
            </tr>
          </thead>
          <tbody>
            <tr className='leave-tracker__table-body-tr'>
              <td className='leave-tracker__table-td'>1</td>
              <td className='leave-tracker__table-td'>Steven</td>
              <td className='leave-tracker__table-td'>Pending</td>
              <td className='leave-tracker__table-td'></td>
              <td className='leave-tracker__table-td'><ApproveLeaveIcon /></td>
            </tr>
            <tr className='leave-tracker__table-body-tr'>
              <td className='leave-tracker__table-td'>2</td>
              <td className='leave-tracker__table-td'>James</td>
              <td className='leave-tracker__table-td'>Pending</td>
              <td className='leave-tracker__table-td'></td>
              <td className='leave-tracker__table-td'><ApproveLeaveIcon /></td>
            </tr>
            <tr className='leave-tracker__table-body-tr'>
              <td className='leave-tracker__table-td'>3</td>
              <td className='leave-tracker__table-td'>Krishia</td>
              <td className='leave-tracker__table-td'>Pending</td>
              <td className='leave-tracker__table-td'></td>
              <td className='leave-tracker__table-td'><ApproveLeaveIcon /></td>
            </tr>
            <tr className='leave-tracker__table-body-tr'>
              <td className='leave-tracker__table-td'>4</td>
              <td className='leave-tracker__table-td'>Christine</td>
              <td className='leave-tracker__table-td'>Pending</td>
              <td className='leave-tracker__table-td'></td>
              <td className='leave-tracker__table-td'><ApproveLeaveIcon /></td>
            </tr>
            <tr className='leave-tracker__table-body-tr'>
              <td className='leave-tracker__table-td'>5</td>
              <td className='leave-tracker__table-td'>Angel</td>
              <td className='leave-tracker__table-td'>Pending</td>
              <td className='leave-tracker__table-td'></td>
              <td className='leave-tracker__table-td'><ApproveLeaveIcon /></td>
            </tr>
            <tr className='leave-tracker__table-body-tr'>
              <td className='leave-tracker__table-td'>6</td>
              <td className='leave-tracker__table-td'>Angel</td>
              <td className='leave-tracker__table-td'>Pending</td>
              <td className='leave-tracker__table-td'></td>
              <td className='leave-tracker__table-td'><ApproveLeaveIcon /></td>
            </tr>
            <tr className='leave-tracker__table-body-tr'>
              <td className='leave-tracker__table-td'>7</td>
              <td className='leave-tracker__table-td'>Renniel</td>
              <td className='leave-tracker__table-td'>Approved</td>
              <td className='leave-tracker__table-td'>10/24/2024</td>
              <td className='leave-tracker__table-td'><ApproveLeaveIcon /></td>
            </tr>
            <tr className='leave-tracker__table-body-tr'>
              <td className='leave-tracker__table-td'>8</td>
              <td className='leave-tracker__table-td'>Dennis</td>
              <td className='leave-tracker__table-td'>Approved</td>
              <td className='leave-tracker__table-td'>10/24/2024</td>
              <td className='leave-tracker__table-td'><ApproveLeaveIcon /></td>
            </tr>
            <tr className='leave-tracker__table-body-tr'>
              <td className='leave-tracker__table-td'>9</td>
              <td className='leave-tracker__table-td'>Shannyn</td>
              <td className='leave-tracker__table-td'>Approved</td>
              <td className='leave-tracker__table-td'>10/24/2024</td>
              <td className='leave-tracker__table-td'><ApproveLeaveIcon /></td>
            </tr>
          </tbody>
        </table>
      </div>

    </section>
  )
}

export default LeaveTracker