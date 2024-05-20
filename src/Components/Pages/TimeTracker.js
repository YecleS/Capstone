import React from 'react';
import '../Styles/TimeTracker.css';


function TimeTracker() {
  return (
    <section className='time-tracker'>
      <div className='time-tracker__controls-wrapper'>
        <input type='text' placeholder='Search by...' className='time-tracker__input'></input>

        <div className='time-tracker__right-controls-wrapper'>
          <select className='time-tracker__category'>
            <option value="" disable selected hidden>Filter By...</option>
            <option value="Name">Name</option>
            <option value="Date">Date</option>
            <option value="Sales">Sales</option>
            <option value="Category">Category</option>
          </select>
        </div>
      </div>

      <div className='time-tracker__table-wrapper'>
        <table className='time-tracker__table'>
          <thead>
            <tr>
              <th className='time-tracker__table-th'>ID</th>
              <th className='time-tracker__table-th'>Name</th>
              <th className='time-tracker__table-th'>Time In</th>
              <th className='time-tracker__table-th'>Time Out</th>
              <th className='time-tracker__table-th'>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className='time-tracker__table-body-tr'>
              <td className='time-tracker__table-td'>1</td>
              <td className='time-tracker__table-td'>Steven</td>
              <td className='time-tracker__table-td'>11:38 am</td>
              <td className='time-tracker__table-td'>1:38 pm</td>
              <td className='time-tracker__table-td'>10/28/2024</td>
            </tr>
            <tr className='time-tracker__table-body-tr'>
              <td className='time-tracker__table-td'>2</td>
              <td className='time-tracker__table-td'>James</td>
              <td className='time-tracker__table-td'>6:30 am</td>
              <td className='time-tracker__table-td'>2:30 pm</td>
              <td className='time-tracker__table-td'>10/28/2024</td>
            </tr>
            <tr className='time-tracker__table-body-tr'>
              <td className='time-tracker__table-td'>3</td>
              <td className='time-tracker__table-td'>Krishia</td>
              <td className='time-tracker__table-td'>7:30 am</td>
              <td className='time-tracker__table-td'>1:30 pm</td>
              <td className='time-tracker__table-td'>10/28/2024</td>
            </tr>
            <tr className='time-tracker__table-body-tr'>
              <td className='time-tracker__table-td'>4</td>
              <td className='time-tracker__table-td'>Christine</td>
              <td className='time-tracker__table-td'>8:30 am</td>
              <td className='time-tracker__table-td'>2:30 pm</td>
              <td className='time-tracker__table-td'>10/28/2024</td>
            </tr>
            <tr className='time-tracker__table-body-tr'>
              <td className='time-tracker__table-td'>5</td>
              <td className='time-tracker__table-td'>Angel</td>
              <td className='time-tracker__table-td'>9:30 am</td>
              <td className='time-tracker__table-td'>3:30 pm</td>
              <td className='time-tracker__table-td'>10/28/2024</td>
            </tr>
            <tr className='time-tracker__table-body-tr'>
              <td className='time-tracker__table-td'>6</td>
              <td className='time-tracker__table-td'>Angel</td>
              <td className='time-tracker__table-td'>5:30 am</td>
              <td className='time-tracker__table-td'>1:30 pm</td>
              <td className='time-tracker__table-td'>10/28/2024</td>
            </tr>
            <tr className='time-tracker__table-body-tr'>
              <td className='time-tracker__table-td'>7</td>
              <td className='time-tracker__table-td'>Renniel</td>
              <td className='time-tracker__table-td'>10:30 am</td>
              <td className='time-tracker__table-td'>2:30 pm</td>
              <td className='time-tracker__table-td'>10/28/2024</td>
            </tr>
            <tr className='time-tracker__table-body-tr'>
              <td className='time-tracker__table-td'>8</td>
              <td className='time-tracker__table-td'>Dennis</td>
              <td className='time-tracker__table-td'>11:30 am</td>
              <td className='time-tracker__table-td'>2:30 pm</td>
              <td className='time-tracker__table-td'>10/28/2024</td>
            </tr>
            <tr className='time-tracker__table-body-tr'>
              <td className='time-tracker__table-td'>9</td>
              <td className='time-tracker__table-td'>Shannyn</td>
              <td className='time-tracker__table-td'>1:30 pm</td>
              <td className='time-tracker__table-td'>2:30 pm</td>
              <td className='time-tracker__table-td'>10/28/2024</td>
            </tr>
          </tbody>
        </table>
      </div>

    </section>
  )
}

export default TimeTracker