import React, { useState } from 'react';
import '../Styles/AddProducts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { AddProductsModal } from '../UIComponents/AddProductsModal';
import DeleteIcon from '../UIComponents/DeleteIcon';
import { EditProductsIcon } from '../UIComponents/EditProductsIcon';

function AddProducts() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <section className='add-products'>
      <div className='add-products__controls-wrapper'>
        <input type='text' placeholder='Search by...' className='add-products__input'></input>

        <div className='add-products__right-controls-wrapper'>
          <select className='add-products__category'>
              <option value="" disable selected hidden>Filter By...</option>
              <option value="Name">Name</option>
              <option value="Date">Date</option>
              <option value="Sales">Sales</option>
              <option value="Category">Category</option>
            </select>
            <button className='add-products__add-button' onClick={openModal}><FontAwesomeIcon icon={faPlus}/> Add Products</button>
            {isModalOpen && <AddProductsModal onClose={closeModal} onSubmit={closeModal} />}
        </div>
      </div>

      <div className='add-products__table-wrapper'>
        <table className='add-products__table'>
          <thead>
              <tr>
                
                <th className='add-products__table-th'>ID</th>
                <th className='add-products__table-th'>Name</th>
                <th className='add-products__table-th'>Model</th>
                <th className='add-products__table-th'>Size/Weight</th>
                <th className='add-products__table-th'>Stocks</th>
                <th className='add-products__table-th'>SRP</th>
                <th className='add-products__table-th'></th>
              </tr>
            </thead>
            <tbody>
              <tr className='add-products__table-body-tr'>
                <td className='add-products__table-td'>1</td>
                <td className='add-products__table-td'>AquaLife</td>
                <td className='add-products__table-td'>Tropical Flakes</td>  
                <td className='add-products__table-td'>25g</td>
                <td className='add-products__table-td'>25</td>
                <td className='add-products__table-td'>500</td>
                <td className='add-products__table-td'><EditProductsIcon /><DeleteIcon /></td>  
              </tr>
                <tr className='add-products__table-body-tr'>
                <td className='add-products__table-td'>2</td>
                <td className='add-products__table-td'>Ocean Nutrition</td>
                <td className='add-products__table-td'>Brine Shrimp Pellets</td>  
                <td className='add-products__table-td'>25g</td>
                <td className='add-products__table-td'>30</td>
                <td className='add-products__table-td'>150</td>
                <td className='add-products__table-td'><EditProductsIcon /><DeleteIcon /></td>  
              </tr>
                <tr className='add-products__table-body-tr'>
                <td className='add-products__table-td'>3</td>
                <td className='add-products__table-td'>Tetra</td>
                <td className='add-products__table-td'>Color-Enhancing Flakes</td>  
                <td className='add-products__table-td'>25g</td>
                <td className='add-products__table-td'>40</td>
                <td className='add-products__table-td'>240</td>
                <td className='add-products__table-td'><EditProductsIcon /><DeleteIcon /></td>  
              </tr>
                <tr className='add-products__table-body-tr'>
                <td className='add-products__table-td'>4</td>
                <td className='add-products__table-td'>Hikari</td>
                <td className='add-products__table-td'>Betta Bio-Gold Pellets</td>  
                <td className='add-products__table-td'>25g</td>
                <td className='add-products__table-td'>500</td>
                <td className='add-products__table-td'>600</td>
                <td className='add-products__table-td'><EditProductsIcon /><DeleteIcon /></td>  
              </tr>
                <tr className='add-products__table-body-tr'>
                <td className='add-products__table-td'>5</td>
                <td className='add-products__table-td'>Flavo</td>
                <td className='add-products__table-td'>Algae Wafer (for Plecos)</td>  
                <td className='add-products__table-td'>25g</td>
                <td className='add-products__table-td'>120</td>
                <td className='add-products__table-td'>130</td>
                <td className='add-products__table-td'><EditProductsIcon /><DeleteIcon /></td>  
              </tr>
              <tr className='add-products__table-body-tr'>
                <td className='add-products__table-td'>6</td>
                <td className='add-products__table-td'>Fluval</td>
                <td className='add-products__table-td'>Spec V Aquarium Kit</td>
                <td className='add-products__table-td'>5 gallons</td>
                <td className='add-products__table-td'>30</td>
                <td className='add-products__table-td'>800</td>
                <td className='add-products__table-td'><EditProductsIcon /><DeleteIcon /></td>
              </tr>
                <tr className='add-products__table-body-tr'>
                <td className='add-products__table-td'>7</td>
                <td className='add-products__table-td'>Tetra</td>
                <td className='add-products__table-td'>Whisper Air Pump</td>
                <td className='add-products__table-td'>10 gallons</td>
                <td className='add-products__table-td'>60</td>
                <td className='add-products__table-td'>1300</td>
                <td className='add-products__table-td'><EditProductsIcon /><DeleteIcon /></td>
              </tr>
                <tr className='add-products__table-body-tr'>
                <td className='add-products__table-td'>8</td>
                <td className='add-products__table-td'>Aqueon</td>
                <td className='add-products__table-td'>QuietFlow Internal Filter</td>
                <td className='add-products__table-td'>20 gallons</td>
                <td className='add-products__table-td'>90</td>
                <td className='add-products__table-td'>1200</td>
                <td className='add-products__table-td'><EditProductsIcon /><DeleteIcon /></td>
              </tr>
          </tbody>
        </table>
      </div>

    
    </section>
  )
}

export default AddProducts