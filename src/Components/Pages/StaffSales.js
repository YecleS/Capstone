import React from 'react';
import '../Styles/StaffSales.css';
import { StaffSalesAddToCart } from '../UIComponents/StaffSalesAddToCart';
import RemoveFromCart from '../UIComponents/RemoveFromCart';

function StaffSales() {
  return (
  <section className='staff-sales'>
    <div className='staff-sales__controls-wrapper'>
      <input type='text' placeholder='Search...' className='staff-sales__input-search'></input>
    </div>
    <div className='staff-sales__inventory-wrapper'>
      <div className='staff-sales__table-controls'>
        <p className='staff-sales__table-title'>Inventory</p>
      </div>  
      <table className='staff-sales__inventory-table'>
        <thead>
          <tr>
            <th className='staff-sales__inventory-th'>ID</th>
            <th className='staff-sales__inventory-th'>Name</th>
            <th className='staff-sales__inventory-th'>Model</th>
            <th className='staff-sales__inventory-th'>Size/Weight</th>
            <th className='staff-sales__inventory-th'>Stock</th>
            <th className='staff-sales__inventory-th'>SRP</th>
            <th className='staff-sales__inventory-th'></th>
          </tr>
        </thead>
        <tbody>
          <tr className='staff-sales__inventory-tr'>
            <td className='staff-sales__inventory-td'>1</td>
            <td className='staff-sales__inventory-td'>Miksa Filter</td>
            <td className='staff-sales__inventory-td'>Z225</td>
            <td className='staff-sales__inventory-td'>30ml</td>
            <td className='staff-sales__inventory-td'>5</td>
            <td className='staff-sales__inventory-td'>35</td>
            <td className='staff-sales__inventory-td'><StaffSalesAddToCart /></td>
          </tr>
          <tr className='staff-sales__inventory-tr'>
            <td className='staff-sales__inventory-td'>2</td>
            <td className='staff-sales__inventory-td'>Subaru Air Pump</td>
            <td className='staff-sales__inventory-td'>X1130</td>
            <td className='staff-sales__inventory-td'>Small</td>
            <td className='staff-sales__inventory-td'>5</td>
            <td className='staff-sales__inventory-td'>70</td>
            <td className='staff-sales__inventory-td'><StaffSalesAddToCart /></td>
          </tr>
          <tr className='staff-sales__inventory-tr'>
            <td className='staff-sales__inventory-td'>3</td>
            <td className='staff-sales__inventory-td'>Midey Air Pump</td>
            <td className='staff-sales__inventory-td'>XZ110</td>
            <td className='staff-sales__inventory-td'>Large</td>
            <td className='staff-sales__inventory-td'>200</td>
            <td className='staff-sales__inventory-td'>70</td>
            <td className='staff-sales__inventory-td'><StaffSalesAddToCart /></td>
          </tr>
          <tr className='staff-sales__inventory-tr'>
            <td className='staff-sales__inventory-td'>4</td>
            <td className='staff-sales__inventory-td'>Glass Tube</td>
            <td className='staff-sales__inventory-td'></td>
            <td className='staff-sales__inventory-td'>5mm</td>
            <td className='staff-sales__inventory-td'>60</td>
            <td className='staff-sales__inventory-td'>23/mm</td>
            <td className='staff-sales__inventory-td'><StaffSalesAddToCart /></td>
          </tr>
          <tr className='staff-sales__inventory-tr'>
            <td className='staff-sales__inventory-td'>5</td>
            <td className='staff-sales__inventory-td'>Glass Tube</td>
            <td className='staff-sales__inventory-td'></td>
            <td className='staff-sales__inventory-td'>3mm</td>
            <td className='staff-sales__inventory-td'>40</td>
            <td className='staff-sales__inventory-td'>20/mm</td>
            <td className='staff-sales__inventory-td'><StaffSalesAddToCart /></td>
          </tr>
          <tr className='staff-sales__inventory-tr'>
            <td className='staff-sales__inventory-td'>6</td>
            <td className='staff-sales__inventory-td'>Plastic Tube</td>
            <td className='staff-sales__inventory-td'></td>
            <td className='staff-sales__inventory-td'>3mm</td>
            <td className='staff-sales__inventory-td'>40</td>
            <td className='staff-sales__inventory-td'>40/mm</td>
            <td className='staff-sales__inventory-td'><StaffSalesAddToCart /></td>
          </tr>
          <tr className='staff-sales__inventory-tr'>
            <td className='staff-sales__inventory-td'>7</td>
            <td className='staff-sales__inventory-td'>Plastic Tube</td>
            <td className='staff-sales__inventory-td'></td>
            <td className='staff-sales__inventory-td'>5mm</td>
            <td className='staff-sales__inventory-td'>25</td>
            <td className='staff-sales__inventory-td'>10/mm</td>
            <td className='staff-sales__inventory-td'><StaffSalesAddToCart /></td>
          </tr>
          
        </tbody>
      </table>
    </div>

    <div className='staff-sales__cart-wrapper'>
      <div className='staff-sales__cart-table-wrapper'>
        <div className='staff-sales__table-controls'>
          <p className='staff-sales__table-title'>Sales Cart</p>
        </div>  
        <table className='staff-sales__cart-table'>
            <thead>
              <tr>
                <th className='staff-sales__cart-th'>Name</th>
                <th className='staff-sales__cart-th'>Model</th>
                <th className='staff-sales__cart-th'>Size/Weight</th>
                <th className='staff-sales__cart-th'>Qty</th>
                <th className='staff-sales__cart-th'>Price</th>
                <th className='staff-sales__cart-th'></th>
              </tr>
            </thead>
            <tbody>
              <tr className='staff-sales__cart-tr'>
                <td className='staff-sales__cart-td'>Miksa Filter</td>
                <td className='staff-sales__cart-td'>Z225</td>
                <td className='staff-sales__cart-td'></td>
                <td className='staff-sales__cart-td'>2</td>
                <td className='staff-sales__cart-td'>70</td>
                <td className='staff-sales__cart-td'><RemoveFromCart /></td>
              </tr>
              <tr className='staff-sales__cart-tr'>
                <td className='staff-sales__cart-td'>Subaru Air Pump</td>
                <td className='staff-sales__cart-td'>X1130</td>
                <td className='staff-sales__cart-td'></td>
                <td className='staff-sales__cart-td'>1</td>
                <td className='staff-sales__cart-td'>60</td>
                <td className='staff-sales__cart-td'><RemoveFromCart /></td>
              </tr>
              <tr className='staff-sales__cart-tr'>
                <td className='staff-sales__cart-td'>Aquarium Soap</td>
                <td className='staff-sales__cart-td'></td>
                <td className='staff-sales__cart-td'>30ml</td>
                <td className='staff-sales__cart-td'>2</td>
                <td className='staff-sales__cart-td'>35</td>
                <td className='staff-sales__cart-td'><RemoveFromCart /></td>
              </tr>
              <tr className='staff-sales__cart-tr'>
                <td className='staff-sales__cart-td'>Limestones</td>
                <td className='staff-sales__cart-td'></td>
                <td className='staff-sales__cart-td'>2kg</td>
                <td className='staff-sales__cart-td'>2</td>
                <td className='staff-sales__cart-td'>160</td>
                <td className='staff-sales__cart-td'><RemoveFromCart /></td>
              </tr>
              <tr className='staff-sales__cart-tr'>
                <td className='staff-sales__cart-td'>Igneous rocks</td>
                <td className='staff-sales__cart-td'></td>
                <td className='staff-sales__cart-td'>5kg</td>
                <td className='staff-sales__cart-td'>2</td>
                <td className='staff-sales__cart-td'>260</td>
                <td className='staff-sales__cart-td'><RemoveFromCart /></td>
              </tr>
              <tr className='staff-sales__cart-tr'>
                <td className='staff-sales__cart-td'>Metamorphic rocks</td>
                <td className='staff-sales__cart-td'></td>
                <td className='staff-sales__cart-td'>2kg</td>
                <td className='staff-sales__cart-td'>2</td>
                <td className='staff-sales__cart-td'>30</td>
                <td className='staff-sales__cart-td'><RemoveFromCart /></td>
              </tr>
            </tbody>
          </table>
        </div>
     

        <div className='staff-sales__checkout-details-wrapper'>
          <div className='staff-sales__checkout-details-labels-wrapper'>
            <p className='staff-sales__sub-total-label'>Sub - Total: </p>
            <p className='staff-sales__sub-total-label'>Discounts: </p>
            <p className='staff-sales__sub-total-label'>Total: </p>
          </div>
          <div className='staff-sales__checkout-details-price-wrapper'>
            <p className='staff-sales__sub-total-label'>140</p>
            <p className='staff-sales__sub-total-label'>0</p>
            <p className='staff-sales__sub-total-label'>140</p>
          </div>   
        </div>

        <div className='staff-sales__checkout-button-wrapper'>
          <button className='staff-sales__checkout'>Checkout</button>
        </div>
        
    </div>

  </section>
  )
}

export default StaffSales