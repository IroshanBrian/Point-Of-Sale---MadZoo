import { useState } from 'react';
import { createSale } from '../api/index.js';

const SaleForm = () => {
     const [product, setProduct] = useState('');
     const [quantity, setQuantity] = useState('');
     const [totalPrice, setTotalPrice] = useState('');

     const handleSubmit = async (e) => {
          e.preventDefault();
          const sale = { product, quantity, totalPrice };
          await createSale(sale);
          setProduct('');
          setQuantity('');
          setTotalPrice('');
     };

     return (
          <div className="p-4">
               <h1 className="text-2xl font-bold mb-4">Add Sale</h1>
               <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                         <label className="block">Product ID:</label>
                         <input
                              type="text"
                              value={product}
                              onChange={(e) => setProduct(e.target.value)}
                              className="border p-2 w-full"
                              required
                         />
                    </div>
                    <div>
                         <label className="block">Quantity:</label>
                         <input
                              type="number"
                              value={quantity}
                              onChange={(e) => setQuantity(e.target.value)}
                              className="border p-2 w-full"
                              required
                         />
                    </div>
                    <div>
                         <label className="block">Total Price:</label>
                         <input
                              type="number"
                              value={totalPrice}
                              onChange={(e) => setTotalPrice(e.target.value)}
                              className="border p-2 w-full"
                              required
                         />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add Sale</button>
               </form>
          </div>
     );
};

export default SaleForm;
