import React from 'react';
import '../Styles/PayRoll.css';
import { PayRollIcon } from '../UIComponents/PayRollIcon';

function PayRoll() {
  return (
    <section className='pay-roll'>
      <div className='pay-roll__controls-wrapper'>
        <input type='text' placeholder='Search by...' className='pay-roll__input'></input>

        <div className='pay-roll__right-controls-wrapper'>
          <select className='pay-roll__category'>
            <option value="" disable selected hidden>Filter By...</option>
            <option value="Name">Name</option>
            <option value="Date">Date</option>
            <option value="Sales">Sales</option>
            <option value="Category">Category</option>
          </select>
        </div>
      </div>

      <div className='pay-roll__table-wrapper'>
        <table className='pay-roll__table'>
          <thead>
            <tr>
              <th className='pay-roll__table-th'>ID</th>
              <th className='pay-roll__table-th'>Name</th>
              <th className='pay-roll__table-th'>Pay Status</th>
              <th className='pay-roll__table-th'>Date Released</th>
              <th className='pay-roll__table-th'></th>
            </tr>
          </thead>
          <tbody>
            <tr className='pay-roll__table-body-tr'>
              <td className='pay-roll__table-td'>1</td>
              <td className='pay-roll__table-td'>Steven</td>
              <td className='pay-roll__table-td'>Pending</td>
              <td className='pay-roll__table-td'></td>
              <td className='pay-roll__table-td'><PayRollIcon /></td>
            </tr>
            <tr className='pay-roll__table-body-tr'>
              <td className='pay-roll__table-td'>2</td>
              <td className='pay-roll__table-td'>James</td>
              <td className='pay-roll__table-td'>Pending</td>
              <td className='pay-roll__table-td'></td>
              <td className='pay-roll__table-td'><PayRollIcon /></td>
            </tr>
            <tr className='pay-roll__table-body-tr'>
              <td className='pay-roll__table-td'>3</td>
              <td className='pay-roll__table-td'>Krishia</td>
              <td className='pay-roll__table-td'>Pending</td>
              <td className='pay-roll__table-td'></td>
              <td className='pay-roll__table-td'><PayRollIcon /></td>
            </tr>
            <tr className='pay-roll__table-body-tr'>
              <td className='pay-roll__table-td'>4</td>
              <td className='pay-roll__table-td'>Christine</td>
              <td className='pay-roll__table-td'>Pending</td>
              <td className='pay-roll__table-td'></td>
              <td className='pay-roll__table-td'><PayRollIcon /></td>
            </tr>
            <tr className='pay-roll__table-body-tr'>
              <td className='pay-roll__table-td'>5</td>
              <td className='pay-roll__table-td'>Angel</td>
              <td className='pay-roll__table-td'>Pending</td>
              <td className='pay-roll__table-td'></td>
              <td className='pay-roll__table-td'><PayRollIcon /></td>
            </tr>
            <tr className='pay-roll__table-body-tr'>
              <td className='pay-roll__table-td'>6</td>
              <td className='pay-roll__table-td'>Angel</td>
              <td className='pay-roll__table-td'>Pending</td>
              <td className='pay-roll__table-td'></td>
              <td className='pay-roll__table-td'><PayRollIcon /></td>
            </tr>
            <tr className='pay-roll__table-body-tr'>
              <td className='pay-roll__table-td'>7</td>
              <td className='pay-roll__table-td'>Renniel</td>
              <td className='pay-roll__table-td'>Pending</td>
              <td className='pay-roll__table-td'></td>
              <td className='pay-roll__table-td'><PayRollIcon /></td>
            </tr>
            <tr className='pay-roll__table-body-tr'>
              <td className='pay-roll__table-td'>8</td>
              <td className='pay-roll__table-td'>Dennis</td>
              <td className='pay-roll__table-td'>Released</td>
              <td className='pay-roll__table-td'>10/24/2024</td>
              <td className='pay-roll__table-td'><PayRollIcon /></td>
            </tr>
            <tr className='pay-roll__table-body-tr'>
              <td className='pay-roll__table-td'>9</td>
              <td className='pay-roll__table-td'>Shannyn</td>
              <td className='pay-roll__table-td'>Released</td>
              <td className='pay-roll__table-td'>10/24/2024</td>
              <td className='pay-roll__table-td'><PayRollIcon /></td>
            </tr>
          </tbody>
        </table>
      </div>

    </section>
  )
}

export default PayRoll