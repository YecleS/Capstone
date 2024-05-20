import React from 'react';
import '../Styles/SalesProducts.css';

function SalesProducts() {
  return (
    <section className='sales-products'>
      <div className='sales-products__controls-wrapper'>
        <input type='text' placeholder='Search by...' className='sales-products__input'></input>

        <div className='sales-products__right-controls-wrapper'>
          <select className='sales-products__category'>
            <option value="" disable selected hidden>Filter By...</option>
            <option value="Name">Name</option>
            <option value="Date">Date</option>
            <option value="Sales">Sales</option>
            <option value="Category">Category</option>
          </select>
        </div>
      </div>

      <div className='sales-products__table-wrapper'>
        <table className='sales-products__table'>
          <thead>
            <tr>
              <th className='sales-products__table-th'>ID</th>
              <th className='sales-products__table-th'>Name</th>
              <th className='sales-products__table-th'>Model</th>
              <th className='sales-products__table-th'>Size/Weight</th>
              <th className='sales-products__table-th'>Qty</th>
              <th className='sales-products__table-th'>Total</th>
              <th className='sales-products__table-th'>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className='sales-products__table-body-tr'>
              <td className='sales-products__table-td'>1</td>
              <td className='sales-products__table-td'>Fish Feeds</td>
              <td className='sales-products__table-td'>Tropical</td>
              <td className='sales-products__table-td'>10</td>
              <td className='sales-products__table-td'>2</td>
              <td className='sales-products__table-td'>250</td>
              <td className='sales-products__table-td'>10/28/2024</td>
            </tr>
            <tr className='sales-products__table-body-tr'>
              <td className='sales-products__table-td'>2</td>
              <td className='sales-products__table-td'>AquaLife</td>
              <td className='sales-products__table-td'>Tropical Flakes</td>  
              <td className='sales-products__table-td'>25g</td>
              <td className='sales-products__table-td'>25</td>
              <td className='sales-products__table-td'>500</td>
              <td className='sales-products__table-td'>10/28/2024</td>
            </tr>
              <tr className='sales-products__table-body-tr'>
              <td className='sales-products__table-td'>3</td>
              <td className='sales-products__table-td'>Ocean Nutrition</td>
              <td className='sales-products__table-td'>Brine Shrimp Pellets</td>  
              <td className='sales-products__table-td'>25g</td>
              <td className='sales-products__table-td'>30</td>
              <td className='sales-products__table-td'>150</td>
              <td className='sales-products__table-td'>10/28/2024</td>  
            </tr>
              <tr className='sales-products__table-body-tr'>
              <td className='sales-products__table-td'>4</td>
              <td className='sales-products__table-td'>Tetra</td>
              <td className='sales-products__table-td'>Color-Enhancing Flakes</td>  
              <td className='sales-products__table-td'>25g</td>
              <td className='sales-products__table-td'>40</td>
              <td className='sales-products__table-td'>240</td>
              <td className='sales-products__table-td'>10/28/2024</td>  
            </tr>
              <tr className='sales-products__table-body-tr'>
              <td className='sales-products__table-td'>5</td>
              <td className='sales-products__table-td'>Hikari</td>
              <td className='sales-products__table-td'>Betta Bio-Gold Pellets</td>  
              <td className='sales-products__table-td'>25g</td>
              <td className='sales-products__table-td'>500</td>
              <td className='sales-products__table-td'>600</td>
              <td className='sales-products__table-td'>10/28/2024</td>  
            </tr>
              <tr className='sales-products__table-body-tr'>
              <td className='sales-products__table-td'>6</td>
              <td className='sales-products__table-td'>Flavo</td>
              <td className='sales-products__table-td'>Algae Wafer (for Plecos)</td>  
              <td className='sales-products__table-td'>25g</td>
              <td className='sales-products__table-td'>120</td>
              <td className='sales-products__table-td'>130</td>
              <td className='sales-products__table-td'>10/28/2024</td>  
            </tr>
            <tr className='sales-products__table-body-tr'>
              <td className='sales-products__table-td'>7</td>
              <td className='sales-products__table-td'>Fluval</td>
              <td className='sales-products__table-td'>Spec V Aquarium Kit</td>
              <td className='sales-products__table-td'>5 gallons</td>
              <td className='sales-products__table-td'>30</td>
              <td className='sales-products__table-td'>800</td>
              <td className='sales-products__table-td'>10/28/2024</td>
            </tr>
              <tr className='sales-products__table-body-tr'>
              <td className='sales-products__table-td'>8</td>
              <td className='sales-products__table-td'>Tetra</td>
              <td className='sales-products__table-td'>Whisper Air Pump</td>
              <td className='sales-products__table-td'>10 gallons</td>
              <td className='sales-products__table-td'>60</td>
              <td className='sales-products__table-td'>1300</td>
              <td className='sales-products__table-td'>10/28/2024</td>
            </tr>
              <tr className='sales-products__table-body-tr'>
              <td className='sales-products__table-td'>9</td>
              <td className='sales-products__table-td'>Aqueon</td>
              <td className='sales-products__table-td'>QuietFlow Internal Filter</td>
              <td className='sales-products__table-td'>20 gallons</td>
              <td className='sales-products__table-td'>90</td>
              <td className='sales-products__table-td'>1200</td>
              <td className='sales-products__table-td'>10/28/2024</td>
            </tr>
          </tbody>
        </table>
      </div>

    </section>
  )
}

export default SalesProducts