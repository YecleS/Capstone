import React from 'react';
import '../Styles/InventoryProducts.css';

function InventoryProducts() {
  return (
    <section className='inventory-products'>
      <div className='inventory-products__controls-wrapper'>
        <input type='text' placeholder='Search by...' className='inventory-products__input'></input>

        <div className='inventory-products__right-controls-wrapper'>
          <select className='inventory-products__category'>
            <option value="" disable selected hidden>Filter By...</option>
            <option value="Name">Name</option>
            <option value="Date">Date</option>
            <option value="Sales">Sales</option>
            <option value="Category">Category</option>
          </select>
        </div>
      </div>

      <div className='inventory-products__table-wrapper'>
        <table className='inventory-products__table'>
          <thead>
            <tr>
              <th className='inventory-products__table-th'>ID</th>
              <th className='inventory-products__table-th'>Name</th>
              <th className='inventory-products__table-th'>Model</th>
              <th className='inventory-products__table-th'>Size/Weight</th>
              <th className='inventory-products__table-th'>Stocks</th>
              <th className='inventory-products__table-th'>SRP</th>
            </tr>
          </thead>
          <tbody>
            <tr className='inventory-products__table-body-tr'>
              <td className='inventory-products__table-td'>1</td>
              <td className='inventory-products__table-td'>AquaLife</td>
              <td className='inventory-products__table-td'>Tropical Flakes</td>  
              <td className='inventory-products__table-td'>25g</td>
              <td className='inventory-products__table-td'>25</td>
              <td className='inventory-products__table-td'>500</td>  
            </tr>
              <tr className='inventory-products__table-body-tr'>
              <td className='inventory-products__table-td'>2</td>
              <td className='inventory-products__table-td'>Ocean Nutrition</td>
              <td className='inventory-products__table-td'>Brine Shrimp Pellets</td>  
              <td className='inventory-products__table-td'>25g</td>
              <td className='inventory-products__table-td'>30</td>
              <td className='inventory-products__table-td'>150</td>  
            </tr>
              <tr className='inventory-products__table-body-tr'>
              <td className='inventory-products__table-td'>3</td>
              <td className='inventory-products__table-td'>Tetra</td>
              <td className='inventory-products__table-td'>Color-Enhancing Flakes</td>  
              <td className='inventory-products__table-td'>25g</td>
              <td className='inventory-products__table-td'>40</td>
              <td className='inventory-products__table-td'>240</td>  
            </tr>
              <tr className='inventory-products__table-body-tr'>
              <td className='inventory-products__table-td'>4</td>
              <td className='inventory-products__table-td'>Hikari</td>
              <td className='inventory-products__table-td'>Betta Bio-Gold Pellets</td>  
              <td className='inventory-products__table-td'>25g</td>
              <td className='inventory-products__table-td'>500</td>
              <td className='inventory-products__table-td'>600</td>  
            </tr>
              <tr className='inventory-products__table-body-tr'>
              <td className='inventory-products__table-td'>5</td>
              <td className='inventory-products__table-td'>Flavo</td>
              <td className='inventory-products__table-td'>Algae Wafer (for Plecos)</td>  
              <td className='inventory-products__table-td'>25g</td>
              <td className='inventory-products__table-td'>120</td>
              <td className='inventory-products__table-td'>130</td>  
            </tr>
            <tr className='inventory-products__table-body-tr'>
              <td className='inventory-products__table-td'>6</td>
              <td className='inventory-products__table-td'>Fluval</td>
              <td className='inventory-products__table-td'>Spec V Aquarium Kit</td>
              <td className='inventory-products__table-td'>5 gallons</td>
              <td className='inventory-products__table-td'>30</td>
              <td className='inventory-products__table-td'>800</td>
            </tr>
              <tr className='inventory-products__table-body-tr'>
              <td className='inventory-products__table-td'>7</td>
              <td className='inventory-products__table-td'>Tetra</td>
              <td className='inventory-products__table-td'>Whisper Air Pump</td>
              <td className='inventory-products__table-td'>10 gallons</td>
              <td className='inventory-products__table-td'>60</td>
              <td className='inventory-products__table-td'>1300</td>
            </tr>
              <tr className='inventory-products__table-body-tr'>
              <td className='inventory-products__table-td'>8</td>
              <td className='inventory-products__table-td'>Aqueon</td>
              <td className='inventory-products__table-td'>QuietFlow Internal Filter</td>
              <td className='inventory-products__table-td'>20 gallons</td>
              <td className='inventory-products__table-td'>90</td>
              <td className='inventory-products__table-td'>1200</td>
            </tr>
          </tbody>
        </table>
      </div>

    </section>
  )
}

export default InventoryProducts