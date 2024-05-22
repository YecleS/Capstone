import React, {useState} from 'react';
import '../Styles/StaffRestock.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { StaffRestockModal } from '../UIComponents/StaffRestockModal';
import RemoveFromRestockList from '../UIComponents/RemoveFromRestockList';

function StaffRestock() {
  const [isStaffRestockModal, isSetStaffRestockModal] = useState(false);

  const openModal = () => {
    isSetStaffRestockModal(true);
  };

  const closeModal = () => {
    isSetStaffRestockModal(false);
  }

  return (
    <section className='staff-restock'>
    <div className='staff-restock__controls-wrapper'>
      <input type='text' placeholder='Search...' className='staff-restock__input-search'></input>
    </div>
    <div className='staff-restock__inventory-wrapper'>
      <div className='staff-restock__inventory-table-controls'>
        <p className='staff-restock__table-title'>Inventory</p>
        <button className='staff-restock_restock-button' onClick={openModal}><FontAwesomeIcon icon={faPlus} /> Restock</button>
        {isStaffRestockModal && <StaffRestockModal onSubmit={closeModal} onClose={closeModal}/>}
      </div>
      
      <table className='staff-restock__inventory-table'>       
        <thead>
          <tr>
            <th className='staff-restock__inventory-th'>ID</th>
            <th className='staff-restock__inventory-th'>Name</th>
            <th className='staff-restock__inventory-th'>Model</th>
            <th className='staff-restock__inventory-th'>Size/Weight</th>
            <th className='staff-restock__inventory-th'>Stock</th>
            <th className='staff-restock__inventory-th'>SRP</th>
          </tr>
        </thead>
        <tbody>
          <tr className='staff-restock__inventory-tr'>
            <td className='staff-restock__inventory-td'>1</td>
            <td className='staff-restock__inventory-td'>Miksa Filter</td>
            <td className='staff-restock__inventory-td'>Z225</td>
            <td className='staff-restock__inventory-td'>30ml</td>
            <td className='staff-restock__inventory-td'>5</td>
            <td className='staff-restock__inventory-td'>35</td>

          </tr>
          <tr className='staff-restock__inventory-tr'>
            <td className='staff-restock__inventory-td'>2</td>
            <td className='staff-restock__inventory-td'>Subaru Air Pump</td>
            <td className='staff-restock__inventory-td'>X1130</td>
            <td className='staff-restock__inventory-td'>Small</td>
            <td className='staff-restock__inventory-td'>5</td>
            <td className='staff-restock__inventory-td'>70</td>

          </tr>
          <tr className='staff-restock__inventory-tr'>
            <td className='staff-restock__inventory-td'>3</td>
            <td className='staff-restock__inventory-td'>Midey Air Pump</td>
            <td className='staff-restock__inventory-td'>XZ110</td>
            <td className='staff-restock__inventory-td'>Large</td>
            <td className='staff-restock__inventory-td'>200</td>
            <td className='staff-restock__inventory-td'>70</td>

          </tr>
          <tr className='staff-restock__inventory-tr'>
            <td className='staff-restock__inventory-td'>4</td>
            <td className='staff-restock__inventory-td'>Glass Tube</td>
            <td className='staff-restock__inventory-td'></td>
            <td className='staff-restock__inventory-td'>5mm</td>
            <td className='staff-restock__inventory-td'>60</td>
            <td className='staff-restock__inventory-td'>23/mm</td>

          </tr>
          <tr className='staff-restock__inventory-tr'>
            <td className='staff-restock__inventory-td'>5</td>
            <td className='staff-restock__inventory-td'>Glass Tube</td>
            <td className='staff-restock__inventory-td'></td>
            <td className='staff-restock__inventory-td'>3mm</td>
            <td className='staff-restock__inventory-td'>40</td>
            <td className='staff-restock__inventory-td'>20/mm</td>

          </tr>
          <tr className='staff-restock__inventory-tr'>
            <td className='staff-restock__inventory-td'>6</td>
            <td className='staff-restock__inventory-td'>Plastic Tube</td>
            <td className='staff-restock__inventory-td'></td>
            <td className='staff-restock__inventory-td'>3mm</td>
            <td className='staff-restock__inventory-td'>40</td>
            <td className='staff-restock__inventory-td'>40/mm</td>

          </tr>
          <tr className='staff-restock__inventory-tr'>
            <td className='staff-restock__inventory-td'>7</td>
            <td className='staff-restock__inventory-td'>Plastic Tube</td>
            <td className='staff-restock__inventory-td'></td>
            <td className='staff-restock__inventory-td'>5mm</td>
            <td className='staff-restock__inventory-td'>25</td>
            <td className='staff-restock__inventory-td'>10/mm</td>

          </tr>
          
        </tbody>
      </table>
    </div>

    <div className='staff-restock__cart-wrapper'>
      <div className='staff-restock__cart-table-wrapper'>
        <div className='staff-restock__inventory-table-controls'>
          <p className='staff-restock__table-title'>Restock List</p>
        </div>    
        <table className='staff-restock__cart-table'>
            <thead>
              <tr>
                <th className='staff-restock__cart-th'>Name</th>
                <th className='staff-restock__cart-th'>Model</th>
                <th className='staff-restock__cart-th'>Size/Weight</th>
                <th className='staff-restock__cart-th'>Qty</th>
                <th className='staff-restock__cart-th'>Price</th>
                <th className='staff-restock__cart-th'></th>
              </tr>
            </thead>
            <tbody>
              <tr className='staff-restock__cart-tr'>
                <td className='staff-restock__cart-td'>Miksa Filter</td>
                <td className='staff-restock__cart-td'>Z225</td>
                <td className='staff-restock__cart-td'></td>
                <td className='staff-restock__cart-td'>2</td>
                <td className='staff-restock__cart-td'>70</td>
                <td className='staff-restock__cart-td'><RemoveFromRestockList /></td>
              </tr>
              <tr className='staff-restock__cart-tr'>
                <td className='staff-restock__cart-td'>Subaru Air Pump</td>
                <td className='staff-restock__cart-td'>X1130</td>
                <td className='staff-restock__cart-td'></td>
                <td className='staff-restock__cart-td'>1</td>
                <td className='staff-restock__cart-td'>60</td>
                <td className='staff-restock__cart-td'><RemoveFromRestockList /></td>
              </tr>
              <tr className='staff-restock__cart-tr'>
                <td className='staff-restock__cart-td'>Aquarium Soap</td>
                <td className='staff-restock__cart-td'></td>
                <td className='staff-restock__cart-td'>30ml</td>
                <td className='staff-restock__cart-td'>2</td>
                <td className='staff-restock__cart-td'>35</td>
                <td className='staff-restock__cart-td'><RemoveFromRestockList /></td>
              </tr>
              <tr className='staff-restock__cart-tr'>
                <td className='staff-restock__cart-td'>Limestones</td>
                <td className='staff-restock__cart-td'></td>
                <td className='staff-restock__cart-td'>2kg</td>
                <td className='staff-restock__cart-td'>2</td>
                <td className='staff-restock__cart-td'>160</td>
                <td className='staff-restock__cart-td'><RemoveFromRestockList /></td>
              </tr>
              <tr className='staff-restock__cart-tr'>
                <td className='staff-restock__cart-td'>Igneous rocks</td>
                <td className='staff-restock__cart-td'></td>
                <td className='staff-restock__cart-td'>5kg</td>
                <td className='staff-restock__cart-td'>2</td>
                <td className='staff-restock__cart-td'>260</td>
                <td className='staff-restock__cart-td'><RemoveFromRestockList /></td>
              </tr>
              <tr className='staff-restock__cart-tr'>
                <td className='staff-restock__cart-td'>Metamorphic rocks</td>
                <td className='staff-restock__cart-td'></td>
                <td className='staff-restock__cart-td'>2kg</td>
                <td className='staff-restock__cart-td'>2</td>
                <td className='staff-restock__cart-td'>30</td>
                <td className='staff-restock__cart-td'><RemoveFromRestockList /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='staff-restock__checkout-button-wrapper'>
          <button className='staff-restock__checkout'>Restock</button>
        </div>
        
    </div>

  </section>
  )
}

export default StaffRestock