import React from 'react';
import '../Styles/Expenses.css'

function Expenses() {
  return (
    <section className='expenses'>
      <div className='expenses__controls-wrapper'>
        <input type='text' placeholder='Search by...' className='expenses__input'></input>

        <div className='expenses__right-controls-wrapper'>
          <select className='expenses__category'>
            <option value="" disable selected hidden>Filter By...</option>
            <option value="Name">Name</option>
            <option value="Date">Date</option>
            <option value="Sales">Sales</option>
            <option value="Category">Category</option>
          </select>
        </div>
      </div>

      <div className='expenses__table-wrapper'>
        <table className='expenses__table'>
          <thead>
            <tr>
              <th className='expenses__table-th'>ID</th>
              <th className='expenses__table-th'>Name</th>
              <th className='expenses__table-th'>Supplier</th>
              <th className='expenses__table-th'>Total</th>
              <th className='expenses__table-th'>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className='expenses__table-body-tr'>
              <td className='expenses__table-td'>1</td>
              <td className='expenses__table-td'>Rent</td>
              <td className='expenses__table-td'></td>
              <td className='expenses__table-td'>240</td>
              <td className='expenses__table-td'>10/28/2024</td>
            </tr>
            <tr className='expenses__table-body-tr'>
              <td className='expenses__table-td'>2</td>
              <td className='expenses__table-td'>restock</td>
              <td className='expenses__table-td'>Aquarium Laguna</td>
              <td className='expenses__table-td'>8500</td>
              <td className='expenses__table-td'>10/28/2024</td>
            </tr>
            <tr className='expenses__table-body-tr'>
              <td className='expenses__table-td'>3</td>
              <td className='expenses__table-td'>restock</td>
              <td className='expenses__table-td'>JCY Aquatics</td>
              <td className='expenses__table-td'>1400</td>
              <td className='expenses__table-td'>10/28/2024</td>
            </tr>
          </tbody>
        </table>
      </div>

    </section>
  )
}

export default Expenses